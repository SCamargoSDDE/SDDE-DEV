import { Localidad } from "./localidades";
import { Persona } from "./persona";
import { PersonaContacto } from "./personaContacto";

export class PersonaJuridica {
    pujuId: number;
    pejuRazonSocial: string;
    pejuNombreContacto: string;
    pejuMision: string;
    pejuVison: string;
    pejuCargoContacto: string;
    pejuTelCelContacto: string;
    pejuFechaInicioEmpresa: Date;
    pejuNit:number;
    pejuFechaCreacion: Date;
    pejuFechaActualizacion: Date;
    pejuCorreoElectronico: string;
    pejuCorreoElectroniAlterno: string;
    pejuTelefonoContacto: string;
    pejuTelefonoContacAlterno: string;
    pejuRepresentanteLegal: string;
    pejuDescripcionEmpresa: string;
    pejuCantidadProductos: number;
    pejuCantidadColaboradores: number;
    pejuTieneRit : string;
    pejuTieneMatriculaMercantil: string;
    pejuMotivoInformalidad: string;
    pejuUsaLibrosContables: string;
    pejuUsaMediosPagoDigital: string;
    pejuExperienciaEmpresa: string;
    locaId: Localidad;
    persId: Persona;
}


