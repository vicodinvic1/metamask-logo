import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import ButtonText from 'components/Button/Text'
import Fade from 'components/Fade'
import Table from 'components/Table'
import TableBody from 'components/Table/Body'
import Spinner from 'components/Spinner'
import WindowScroll from 'components/WindowScroll'

import { toggleInCollection, multipleToggleInCollection } from 'lib/collection'

import useClasses from 'hooks/useClasses'

import styles from './styles'
import TableBodyContent from './BodyContent'
import TableHeader from './Header'
import TableEmptyRow from './EmptyRow'
import TableSkeleton from './Skeleton'

function TableView (props) {
  const {
    children,
    className,
    collection,
    collectionPlaceholder,
    columns,
    initialCurrentColumns,
    idKey,
    indexIsAKey,
    getActions,
    meta,
    rowColorCreator,
    onCurrentColumnsChange,
    onRowClick,
    onSelect,
    onNextPageFetch,
    skeletonCount,
    isSelectable,
    infiniteScroll,
    sort,
    stickyHeader,
    tableStyle,
    variables,
    withLocalCurrentColumns,
    withStaticColumns
  } = props

  const classes = useClasses(styles)

  const [lastSelectedItemIndex, setLastSelectedItemIndex] = React.useState(null)
  const [currentColumns, setCurrentColumns] = React.useState([])
  const [selectedIds, setSelectedIds] = React.useState([])
  const [selectedFilter, setSelectedFilter] = React.useState(null)

  const _isSelectable = !selectedFilter && isSelectable

  const tableClassName = cx(classes.table, className)

  const { postLoading, last, loading, number, totalPages } = meta
  const filter = variables.filter
  const selectedIdsLength = selectedIds.length
  const showFetchNextPageButton = infiniteScroll &&
    !loading &&
    !last &&
    !!collection.length
  const showEndAdornmentSpinner = infiniteScroll &&
    !!collection.length &&
    loading

  const onVisibleColumnsChange = React.useMemo(
    () => !withStaticColumns &&
      (onCurrentColumnsChange || withLocalCurrentColumns),
    []
  )

  const visibleColumns = React.useMemo(
    () => onVisibleColumnsChange
      ? currentColumns?.filter(c => c.visible)
      : columns,
    [currentColumns]
  )

  const collectionIds = React.useMemo(
    () => isSelectable && collection.map(i => i[idKey]),
    [collection]
  )

  const isSelectedItemChecker = React.useCallback(
    itemId => !!~selectedIds.indexOf(itemId),
    [selectedIds]
  )

  const createItemSelectHandler = React.useCallback(
    item => e => {
      e.stopPropagation()
      const shiftPressed = e.shiftKey

      let newItems = []

      setLastSelectedItemIndex(collectionIds.indexOf(item))

      if (shiftPressed && selectedIdsLength) {
        newItems = multipleToggleInCollection({
          collection: collectionIds,
          item,
          selectedItems: selectedIds,
          lastSelectedItemIndex
        })
      } else {
        newItems = toggleInCollection(selectedIds, item)
      }

      if (onSelect) {
        shiftPressed
          ? onSelect(newItems, collectionIds)
          : onSelect(item, collectionIds)
      }

      setSelectedIds(newItems)
    },
    [collectionIds, selectedIds, lastSelectedItemIndex]
  )

  const handleToggleSelectedFilter = React.useCallback(
    () => setSelectedFilter(filter => filter
      ? null
      : variables.filter),
    [variables]
  )

  const handleRowClick = React.useCallback(
    item => {
      onRowClick(item)
      window.scrollTo(0, 0)
    },
    [onRowClick]
  )

  const handleSelectedIdsReset = React.useCallback(
    () => setSelectedIds([]),
    []
  )

  const handleSelectedFilterReset = React.useCallback(
    () => setSelectedFilter(null),
    []
  )

  const handleSelectedReset = React.useCallback(
    () => {
      handleSelectedIdsReset()
      handleSelectedFilterReset()
    },
    []
  )

  const handleColumnsSet = React.useCallback(
    (initialCurrentColumns) => {
      if (initialCurrentColumns) {
        const initialColumns = initialCurrentColumns.map(column => {
          const matchColumn = columns.find(c => c.name === column.name)

          if (!matchColumn) {
            return null
          }

          return { ...column, ...matchColumn }
        }).filter(Boolean).sort((a, b) => a.position - b.position)

        setCurrentColumns(initialColumns)
      } else {
        setCurrentColumns(columns)
      }
    },
    []
  )

  const handleWindowScroll = React.useCallback(
    (windowScroll) => {
      const scrolledHeight = window.innerHeight * 2 + windowScroll.y
      const trigger = scrolledHeight >= document.body.scrollHeight

      if (trigger && !loading && number + 1 < totalPages) {
        onNextPageFetch()
      }
    },
    [loading, number, last, totalPages]
  )

  React.useEffect(() => {
    handleColumnsSet(initialCurrentColumns)
  }, [initialCurrentColumns])

  React.useEffect(() => {
    handleSelectedIdsReset()
  }, [filter, variables.sort])

  const renderTableBodyContent = () => {
    if (!loading && !collection.length) {
      return (
        <TableEmptyRow
          columnsLength={columns.length}
          isSelectable={_isSelectable}
        >
          {collectionPlaceholder}
        </TableEmptyRow>
      )
    }

    return (
      <TableBodyContent
        rowColorCreator={rowColorCreator}
        collection={collection}
        columns={visibleColumns}
        currentSort={variables.sort}
        getActions={getActions}
        idKey={idKey}
        indexIsAKey={indexIsAKey}
        isSelectable={_isSelectable}
        isSelectedItemChecker={isSelectedItemChecker}
        onCheckboxClick={createItemSelectHandler}
        onRowClick={onRowClick && handleRowClick}
        sort={sort}
        postLoading={postLoading}
        withStaticColumns={withStaticColumns}
      />
    )
  }

  return (
    <>
      <Table
        className={tableClassName}
        stickyHeader={stickyHeader}
        style={{ ...tableStyle }}
      >
        <TableHeader
          collectionIds={collectionIds}
          currentColumns={currentColumns}
          onCurrentColumnsChange={onCurrentColumnsChange}
          onCurrentColumnsSet={setCurrentColumns}
          onSelect={onSelect}
          onSelectedIdsSet={setSelectedIds}
          isSelectable={_isSelectable}
          selectedIds={selectedIds}
          sort={sort}
          stickyHeader={stickyHeader}
          visibleColumns={visibleColumns}
          withStaticColumns={withStaticColumns}
        />

        <TableBody>
          {loading && (
            <TableSkeleton
              columns={visibleColumns}
              count={skeletonCount}
              isSelectable={_isSelectable}
            />
          )}

          {renderTableBodyContent()}
        </TableBody>
      </Table>

      {infiniteScroll && (
        <>
          <WindowScroll onWindowScroll={handleWindowScroll} />

          {showEndAdornmentSpinner && <Spinner withIndent />}

          {showFetchNextPageButton && (
            <Fade in className={classes.fetchButtonContainer}>
              <ButtonText color='secondary' onClick={onNextPageFetch}>
                Fetch more
              </ButtonText>
            </Fade>
          )}
        </>
      )}

      {children && children({
        selectedFilter,
        selectedIds,
        meta,
        onSelectedReset: handleSelectedReset,
        onToggleSelectedFilter: handleToggleSelectedFilter
      })}
    </>
  )
}

TableView.propTypes = {
  columns: PropTypes.array.isRequired,
  getActions: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  infiniteScroll: PropTypes.bool,
  initialSelectedItems: PropTypes.array,
  isSelectable: PropTypes.bool,
  onSelect: PropTypes.func,
  skeletonCount: PropTypes.number,
  variables: PropTypes.object,
  withLocalCurrentColumns: PropTypes.bool,
  withStaticColumns: PropTypes.bool
}

TableView.defaultProps = {
  getActions: false,
  idKey: 'id',
  infiniteScroll: true,
  initialSelectedItems: [],
  isSelectable: true,
  skeletonCount: 20,
  stickyHeader: true,
  variables: {},
  withLocalCurrentColumns: true,
  withStaticColumns: false
}

export default React.memo(TableView)
