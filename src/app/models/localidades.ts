import { PersonaJuridica } from "./PersonaJuridica";

export class Localidades {
    locaId: number;
    locaNombre: string;
    locaEstado: string;
    locaFechaCreacion: Date;
    locaFechaActualizacion: Date;
    personaJuridicaCollection: PersonaJuridica;
}

