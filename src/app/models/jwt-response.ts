import { Usuarios } from './usuarios';

export interface JwtResponse {
  usuario: Usuarios;
  token: string;
}
