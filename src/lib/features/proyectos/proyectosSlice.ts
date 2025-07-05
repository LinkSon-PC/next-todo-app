import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import Proyecto from '@/assets/interfaces/Proyecto'
import { v4 as uuidv4 } from 'uuid';


// Define the initial state using that type
const initialState: Proyecto[] = [
    {
        id: uuidv4(),
        name: "Proyecto 1",
        description: "Primer proyecto",
        fechaFin: new Date(),
        fechaInicio: new Date(),
        usuarios: ["USER 1"]
    },
    {
        id: uuidv4(),
        name: "Proyecto 2",
        description: "Segundo proyecto",
        fechaFin: new Date(),
        fechaInicio: new Date(),
        usuarios: ["USER 2"]
    },
    {
        id: uuidv4(),
        name: "Proyecto 3",
        description: "Tercer proyecto",
        fechaFin: new Date(),
        fechaInicio: new Date(),
        usuarios: ["USER 1","USER 2"]
    }
]


export const proyectoSlice = createSlice({
  name: 'proyecto',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    resetProyecto: (state) =>{
        state = initialState
    },
    initializeProyecto: (state, action: PayloadAction<Proyecto>) => {
        state = [action.payload];
    },
    addProyecto: (state, action: PayloadAction<Proyecto>) => {
        state = [...state,action.payload];
    },
    removeProyecto: (state, action: PayloadAction<string>) => {
        state = state.filter(p => p.id !== action.payload);
    },
    updateProyecto: (state, action: PayloadAction<Proyecto>)=> {
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

export const { initializeProyecto, resetProyecto, addProyecto, removeProyecto, updateProyecto } = proyectoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProject = (state: RootState) => state.proyecto.values()

export default proyectoSlice.reducer