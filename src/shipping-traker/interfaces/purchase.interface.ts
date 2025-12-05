export type Purchase = {
  id: number;
  fecha: string;
  cantidad: number;
  producto: string;
  tipoProducto: string;
  costoProducto: number;
  costoEnvio: number;
  costoTotal: number;
  tracking: string;
  courier: string;
  cuenta: string;
  estado: string;
  notas: string;
};