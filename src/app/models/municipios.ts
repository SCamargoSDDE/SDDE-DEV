import { Departamento } from "./departamentos";
import { Personas } from "./personas";

export class Municipio {
    muniId: string;
    muniNombre: string;
    muniEstado: string;
    muniFechaCreacion: Date;
    muniFechaActualizacion: Date;
    depaId: Departamento;
    personasCollection: Personas;
}

