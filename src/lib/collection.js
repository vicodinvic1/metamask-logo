export function toggleInCollection (collection, item) {
  const index = collection.indexOf(item)

  let newCollection = []

  if (index === -1) {
    newCollection = newCollection.concat(collection, item)
  } else if (index === 0) {
    newCollection = newCollection.concat(collection.slice(1))
  } else if (index === collection.length - 1) {
    newCollection = newCollection.concat(collection.slice(0, -1))
  } else if (index > 0) {
    newCollection = newCollection.concat(
      collection.slice(0, index),
      collection.slice(index + 1)
    )
  }

  return newCollection
}

export function multipleToggleInCollection (args) {
  const {
    collection,
    item,
    lastSelectedItemIndex,
    selectedItems
  } = args

  const index = collection.indexOf(item)

  let newCollection = []

  if (selectedItems.includes(item)) {
    const itemsToExclude = index < lastSelectedItemIndex
      ? collection.slice(index, lastSelectedItemIndex + 1)
      : collection.slice(lastSelectedItemIndex, index + 1)

    newCollection = selectedItems.filter(v => !itemsToExclude.includes(v))
  } else {
    if (index > lastSelectedItemIndex) {
      newCollection = selectedItems.length > 1
        ? newCollection.concat(
            selectedItems,
            collection.slice(lastSelectedItemIndex, index + 1)
          )
        : newCollection = collection.slice(lastSelectedItemIndex, index + 1)
    } else {
      newCollection = selectedItems.length > 1
        ? newCollection.concat(
            selectedItems,
            collection.slice(index, lastSelectedItemIndex + 1)
          )
        : newCollection = collection.slice(index, lastSelectedItemIndex + 1)
    }
  }

  return [...new Set(newCollection)]
}

export function toggleValueInCollection (args) {
  const {
    collection,
    currentValue = [],
    invertValue = false,
    newValue
  } = args

  if (Array.isArray(newValue)) {
    if (newValue.length === collection.length) {
      return invertValue
        ? currentValue
            ? currentValue.filter(v => !collection.includes(v))
            : []
        : collection
    }

    if (newValue.length === 0) {
      return invertValue
        ? currentValue
            ? [...currentValue, ...collection]
            : collection
        : []
    }

    return collection.filter(v => invertValue
      ? !newValue.includes(v)
      : newValue.includes(v)
    )
  }

  return toggleInCollection(currentValue, newValue)
}
