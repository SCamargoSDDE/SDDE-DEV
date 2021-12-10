import { Localidad } from "./localidades";
import { PersonaJuridica } from "./PersonaJuridica";
import { PersonaNatural } from "./personaNatural";
import { TipoDocumentoIdentidad } from "./tipoDocumentoIdentidad";

export class Persona {
    persId:number;
    persDigitoVerificacion:string;
    persNumeroDocumento:string;
    persDireccion:string;
    persTelFijo:string;
    persTelCelular:string;
    persCorreoElectronico:string;
    persEmprendimientosPasados:number;
    persBiografia:string;
    persFechaCreacion:Date;
    persFechaActualizacion:Date;
    personaNatural: PersonaNatural;
    muniId:number;
    tidoId:number;
    usuaId:number;
    personaJuridica:PersonaJuridica;
}



