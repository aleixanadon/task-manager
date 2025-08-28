import { useAppSelector, useAppDispatch } from '../app/hooks'
import { createList, updateList, deleteList } from '../features/taskManager/listSlice'
import type { IList } from '../types/IList'

export const useListOfLists = () => {
  
  const list = useAppSelector(state => state.list.value)
  const dispatch = useAppDispatch()
  
  const addList = (name: string) => dispatch(createList(name))
  const modifyList = (list: IList) => dispatch(updateList(list))
  const removeList = (id: string) => dispatch(deleteList(id))

  return {
    list,
    addList,
    modifyList,
    removeList,
  }
}
