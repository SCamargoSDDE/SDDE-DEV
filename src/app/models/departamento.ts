import { municipio } from "./municipio";

export class Departamento {
    id: string;
    nombre: string;
    estado: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    municipio: municipio;  
}