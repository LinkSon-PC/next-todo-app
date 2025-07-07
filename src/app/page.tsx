'use client'

import type { RootState } from '../lib/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/lib/features/counter/counterSlice'
import {resetUser, initializeUser, updateUser, updateRol} from '@/lib/features/usuarios/usuariosSlice'
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Link from 'next/link'
import Select from '@/components/ui/Select';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type FormData = {
  name: string,
  rol: string
}

export default function Home() {
  const router = useRouter();
  const count = useSelector((state: RootState) => state.counter.value)
  const user =  useSelector((state: RootState) => state.user.name)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(user);
  //   return ;
  // },[user])

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado: ", data);
    //dispatch(initializeUser({name: data.name, rol: data.rol, value: 0}));
    //dispatch(updateUser(data.name));
    const usuario = {
      username:  data.name,
      role: data.rol
    }
    console.log(usuario);
    localStorage.setItem('user', JSON.stringify(usuario));
    router.push('/dashboard');
  }

  const userRoles = [
    { value: "admin", label: "ADMIN" },
    { value: "user", label: "USER" }
  ]

  return (
    <div className="">
      <main className="">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              
              <div className="mt-2">
                <Input
                  label="Nombre"
                  name="name"
                  type="text"
                  registration={register('name', { required: 'El nombre es obligatorio' })}
                  error={errors.name?.message}
                />  
              </div>

              <div className="mt-2">
                <Select 
                  name="rol"
                  label="Rol"
                  options={userRoles}
                  registration={register("rol", {required: "Debe seleccionar un rol"})}
                  error={errors.rol?.message}
                />
              </div>
              <Button type="submit">Enviar</Button>
              <div>
                <Link 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/dashboard">Sign In</Link>             
              </div>
            </form>

            {/* <div>
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
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
