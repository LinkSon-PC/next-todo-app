import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import Tarea from '@/assets/interfaces/Tarea'
import { v4 as uuidv4 } from 'uuid';

// Define the initial state using that type
const initialState: Tarea[] = [
  {
    id: uuidv4(),
    name: "Tarea 1",
    description: "Primera tarea",
    fecha: new Date(),
    estado: false 
  },
  {
    id: uuidv4(),
    name: "Tarea 2",
    description: "Segunda tarea",
    fecha: new Date(),
    estado: true 
  },
  {
    id: uuidv4(),
    name: "Tarea 3",
    description: "Tercera tarea",
    fecha: new Date(),
    estado: false 
  }
]

export const tareaSlice = createSlice({
  name: 'tarea',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    resetTarea: (state) =>{
        state = initialState
    },
    initializeTarea: (state, action: PayloadAction<Tarea>) => {
        state = [action.payload];
    },
    addTarea: (state, action: PayloadAction<Tarea>) => {
        state = [...state, action.payload];
    },
    removeTarea: (state, action: PayloadAction<string>) => {
        state = state.filter(p => p.id !== action.payload);
    },
    updateTarea: (state, action: PayloadAction<Tarea>)=> {
        state = state.map(p => 
            {
                if (p.id === action.payload.id)
                    return action.payload;
                return p;
            }
        )
    }
  },
})

export const { initializeTarea, resetTarea, addTarea, removeTarea, updateTarea } = tareaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tarea.values()

export default tareaSlice.reducer