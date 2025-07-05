import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface UserState {
    name: string,
    rol: string,
    value: number
}

// Define the initial state using that type
const initialState: UserState = {
    name: "",
    rol: "",
    value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    resetUser: (state) =>{
        state = initialState
    },
    initializeUser: (state, action: PayloadAction<UserState>) => {
        state = action.payload;
    },
    updateUser: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    updateRol: (state, action: PayloadAction<string>) => {
        state.rol = action.payload;
    }
  },
})

export const { initializeUser, resetUser, updateUser, updateRol } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer