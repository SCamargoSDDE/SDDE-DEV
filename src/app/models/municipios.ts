import { Departamento } from "./departamentos";
import { Persona } from "./persona";

export class Municipio {
    muniId: string;
    muniNombre: string;
    muniEstado: string;
    muniFechaCreacion: Date;
    muniFechaActualizacion: Date;
    depaId: Departamento;
    personasCollection:Persona;
}

