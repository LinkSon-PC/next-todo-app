'use client'

import Admin from "@/components/dasboard/admin/Admin"
import User from "@/components/dasboard/user/User"
import { useAuth } from "@/hooks/useAuth";


export default function Page() {
    const { user } = useAuth();
    if (!user) return null; // o loading spinner
    
    return <>
        <Admin/>
        <User/>
    </>   
}