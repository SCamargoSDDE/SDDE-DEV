import { Persona } from "./persona";
import { PersonaContacto } from "./personaContacto";

export class PersonaJuridica {
    id: number;
    razonSocial: string;
    mision: string;
    vison: string;
    personaContacto: PersonaContacto;
    fechaInicioEmpresa: Date;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    persona: Persona;
}
