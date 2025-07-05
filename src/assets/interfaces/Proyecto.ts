import { UUID } from "crypto"

export default interface Proyecto{
    id: string
    name: string,
    description: string,
    fechaInicio: Date,
    fechaFin: Date,
    usuarios: string[]
}