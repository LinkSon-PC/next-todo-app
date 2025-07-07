'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
    username: string;
    role: string;
}

export function useAuth(allowedRoles: string[] = []){
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const stredUser = localStorage.getItem('user');

        if(!stredUser){
            alert('Usuario no autenticado');
            //Redirigir si no hay sesion
            router.push('/');
            return;
        }

        const parsedUser: User = JSON.parse(stredUser);

        if(allowedRoles.length && !allowedRoles.includes(parsedUser.role)){
            // Revisar si tiene roles requeridos
            alert('No tienes acceso a esta pagina');
            router.push('/');
            return;
        }

        setUser(parsedUser);
    }, []);

    return {user};
}