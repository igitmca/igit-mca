import useControl from '@/hooks/useControl'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { hideSnackbar } from '@/state/Toast/control'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

const ToastProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { showSnackbar } = useControl()
  const {snack}=useAppSelector(state=>state.control)

  useEffect(() => {
    if (snack.title && snack.status) {
      showSnackbar(snack.title, snack.status)
      dispatch(hideSnackbar())
    }
  }, [showSnackbar,dispatch,snack])

  return children
}

export default ToastProvider