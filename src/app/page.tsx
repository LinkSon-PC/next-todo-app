'use client'

import type { RootState } from '../lib/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../lib/features/counter/counterSlice'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="">
      <main className="">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Ingresar Nombre</label>
                <div className="mt-2">
                  <input type="text" name="name" id="name" autoComplete="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="rol" className="block text-sm/6 font-medium text-gray-900">Seleccionar Rol</label>
                </div>
                <div className="mt-2">
                  <select name="rol" id="rol" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" >
                    <option>Administrador</option>
                    <option>Usuario</option>
                  </select>
                </div>
              </div>

              <div>
                <button 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Sign in</button>
              </div>
            </form>

            <div>
              <button
                aria-label="Increment value"
                className="text-white p-3 bg-blue-500 hover:bg-blue-700 rounded-sm"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                className="text-white p-3 bg-pink-500 hover:bg-fuchsia-500 rounded-sm"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
