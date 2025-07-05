import { UUID } from "crypto"

export default interface Tarea{
    id: string
    name: string,
    description: string,
    fecha: Date,
    estado: boolean 
}