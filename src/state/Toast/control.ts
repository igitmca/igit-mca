import { ToastTypes } from '@/hooks/useControl'
import { createSlice } from '@reduxjs/toolkit'

type ControlState = {
    snack: {
      title: string | null
      status: ToastTypes
      description?: string 
    }
  }
  
const initialState:ControlState = {
  snack: {
    title: null,
    status: 'normal',
    description: '',
  },
}

const slice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    showSnackbar(state, action) {
      switch (action.payload.status) {
        case 'success':
          state.snack.title = action.payload?.title || 'Success'
          state.snack.status = 'success'
          break
        case 'error':
          state.snack.title =
            action.payload?.title || 'Unexpected Error Occurred'
          state.snack.status = 'error'

          break
        case 'warning':
          state.snack.title = action.payload?.title
          state.snack.status = 'warning'
          break
        case 'info':
          state.snack.title = action.payload?.title
          state.snack.status = 'info'
          break
        default:
          state.snack.title =
            action.payload?.title || 'Unexpected Error Occurred'
          state.snack.status = 'error'
          break
      }
      state.snack.description = action.payload?.description || null
    },
    hideSnackbar(state) {
      state = initialState
      return state
    },
  },
})

// Reducer
export default slice.reducer
// Actions
export const { showSnackbar, hideSnackbar } = slice.actions
