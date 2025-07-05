import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import proyectoReducer from './features/proyectos/proyectosSlice'
import tareaReducer from './features/tareas/tareasSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
          counter: counterReducer,
          proyecto: proyectoReducer,
          tarea: tareaReducer
        },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']