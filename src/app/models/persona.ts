import { Localidad } from "./localidad";
import { TipoDocumentoIdentidad } from "./tipoDocumentoIdentidad";

export class Persona {
    id: number;
    digitoVerificacion: string;
    tipoDocumentoIdentidad: TipoDocumentoIdentidad; 
    numeroDocumento: string;
    direccion: string;
    telFijo: string;
    telCelular: string;
    correoElectronico: string;
    emprendimientosPasados: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    localidad: Localidad;
}
