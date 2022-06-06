import useSelector from 'hooks/useSelector'

export default function useCurrentUser () {
  const user = useSelector(state => state.user)
  return user
}
