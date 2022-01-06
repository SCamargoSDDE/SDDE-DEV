import { AfiliacionesEmpleados } from "./afiliacionesEmpleados";
import { CodigosCiiu } from "./codigosCiiu";
import { InsumosMateriasPrimas } from "./insumosMateriasPrimas";
import { Localidades } from "./localidades";
import { Personas } from "./personas";
import { SectoresProductivos } from "./sectoresProductivos";
import { TamanoEmpresa } from "./tamanoEmpresa";
import { TiposIntereses } from "./tiposIntereses";

export class Emprendimientos {
    emprId: number;
    //emprConstituido: string;
    emprNombre: string;
    emprDescripcion: string;
    emprEstado: string;
    emprNit: string;
    emprDireccion: string;
    emprCorreoElectronico: string;
    emprCorreoElectroniAlterno: string;
    emprTelefonoContacto: string;
    emprTelefonoContacAlterno: string;
    emprReplegalPrimerNombre: string;
    emprReplegalSegundoNombre: string;
    emprReplegalPrimerApellido: string;
    emprReplegalSegundoApellido: string;
    emprCantidadColaboradores: number;
    emprPublicoObjetivo: string;
    emprOportunidad: string;
    emprPropuestaValor: string;
    emprTieneMatriculaMercantil: string;
    persTieneRit: string;
    emprMotivoInformalidad: string;
    emprUsaLibrosContables: string;
    emprUsaMediosPagoDigital: string;
    emprAnioCreacion: number;
    emprSitioWeb: string;
    emprFechaCreacion: Date;
    emprFechaActualizacion: Date;
    afemId: AfiliacionesEmpleados;
    cociId: CodigosCiiu;
    inmaId: InsumosMateriasPrimas;
    locaId: Localidades;
    persId: Personas;
    seprId: SectoresProductivos;
    taemId: TamanoEmpresa;
    tiposInteresesTiinId: TiposIntereses;

}


