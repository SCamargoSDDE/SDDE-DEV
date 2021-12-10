import { Personas } from "./personas";

export class Usuarios {
    usuaId: number;
    usuaUsuario: string;
    usuaContrasenia: string;
    usuaEstado: string;
    usuaFechaCreacion: Date;
    usuaFechaActualizacion: Date;
    personas: Personas;
}