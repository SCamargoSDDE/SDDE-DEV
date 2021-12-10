import { PersonaJuridica } from "./PersonaJuridica";

export class Localidad {
    locaId: number;
    locaNombre: string;
    locaEstado: string;
    locaFechaCreacion: Date;
    locaFechaActualizacion: Date;
    personaJuridicaCollection: PersonaJuridica;
}

