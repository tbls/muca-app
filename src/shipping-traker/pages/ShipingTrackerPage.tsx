import { type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Purchase } from "../interfaces/purchase.interface";

const purchases: Purchase[] = [
  {
    id: 1,
    fecha: "2025-02-08",
    cantidad: 1,
    producto: "ASUS ROG STRIX G16 2025 - i9 14900HX, RTX 5070, 32GB RAM, 1TB SSD, FHD",
    tipoProducto: "LAPTOP",
    costoProducto: 1500,
    costoEnvio: 70,
    costoTotal: 1570,
    tracking: "TBA323241111738",
    courier: "MK",
    cuenta: "Junior",
    estado: "FD",
    notas: "",
  },
  {
    id: 2,
    fecha: "2025-08-09",
    cantidad: 1,
    producto: "RTX 5070 ASUS TUF 12GB",
    tipoProducto: "GPU",
    costoProducto: 950,
    costoEnvio: 300,
    costoTotal: 1250,
    tracking: "575184331",
    courier: "MK",
    cuenta: "Junior",
    estado: "FD",
    notas: "",
  },
  {
    id: 3,
    fecha: "2025-11-14",
    cantidad: 1,
    producto: "Z890 ASUS ROG MAXIMUS APEX",
    tipoProducto: "MB",
    costoProducto: 350,
    costoEnvio: 20,
    costoTotal: 370,
    tracking: "385100549",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 4,
    fecha: "2025-11-14",
    cantidad: 1,
    producto: "ULTRA 9 285K",
    tipoProducto: "CPU",
    costoProducto: 570,
    costoEnvio: 10,
    costoTotal: 580,
    tracking: "385100549",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 5,
    fecha: "2025-11-14",
    cantidad: 1,
    producto: "MSI MAG AIO 360MM BLACK",
    tipoProducto: "AIO",
    costoProducto: 100,
    costoEnvio: 20,
    costoTotal: 120,
    tracking: "442611443",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 6,
    fecha: "2025-11-15",
    cantidad: 1,
    producto: "MSI MP A100DGS GOLD",
    tipoProducto: "FUENTE",
    costoProducto: 110,
    costoEnvio: 30,
    costoTotal: 280,
    tracking: "442611443",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 7,
    fecha: "2025-11-16",
    cantidad: 1,
    producto: "LIQUIDA ROG IV",
    tipoProducto: "OTROS",
    costoProducto: 480,
    costoEnvio: 0,
    costoTotal: 480,
    tracking: "114-6385853-2093011",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 8,
    fecha: "2025-11-17",
    cantidad: 1,
    producto: "MSI MP A100DGS GOLD",
    tipoProducto: "FUENTE",
    costoProducto: 360,
    costoEnvio: 30,
    costoTotal: 390,
    tracking: "114-6385853-2101805",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 9,
    fecha: "2025-11-17",
    cantidad: 1,
    producto: "RTX 5070 MSI VENTUS 12GB",
    tipoProducto: "GPU",
    costoProducto: 500,
    costoEnvio: 20,
    costoTotal: 1040,
    tracking: "558031334",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 10,
    fecha: "2025-11-17",
    cantidad: 1,
    producto: "RTX 5070 MSI VENTUS 12GB",
    tipoProducto: "GPU",
    costoProducto: 500,
    costoEnvio: 20,
    costoTotal: 1040,
    tracking: "558031334",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 11,
    fecha: "2025-11-17",
    cantidad: 1,
    producto: "RTX 5070 MSI VENTUS 12GB",
    tipoProducto: "GPU",
    costoProducto: 250,
    costoEnvio: 270,
    costoTotal: 520,
    tracking: "585797638",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 12,
    fecha: "2025-11-19",
    cantidad: 1,
    producto: "LEGO",
    tipoProducto: "OTROS",
    costoProducto: 0,
    costoEnvio: 0,
    costoTotal: 0,
    tracking: "114-0888295-9657432",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 13,
    fecha: "2025-11-20",
    cantidad: 1,
    producto: "RX 9070XT SAPPHIRE NITRO+ 16GB",
    tipoProducto: "GPU",
    costoProducto: 700,
    costoEnvio: 30,
    costoTotal: 730,
    tracking: "114-882265-1034343",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 14,
    fecha: "2025-11-20",
    cantidad: 1,
    producto: "RX 9070XT SAPPHIRE NITRO+ 16GB",
    tipoProducto: "GPU",
    costoProducto: 700,
    costoEnvio: 30,
    costoTotal: 730,
    tracking: "114-2979656-5785233",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 15,
    fecha: "2025-11-20",
    cantidad: 1,
    producto: "RX 9070XT SAPPHIRE NITRO+ 16GB",
    tipoProducto: "GPU",
    costoProducto: 700,
    costoEnvio: 30,
    costoTotal: 730,
    tracking: "114-731749-1680428",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 16,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "R9 9950X3D",
    tipoProducto: "CPU",
    costoProducto: 670,
    costoEnvio: 10,
    costoTotal: 680,
    tracking: "114-249768-6086732",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 17,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "AMAZON RETARD 1",
    tipoProducto: "OTROS",
    costoProducto: 816,
    costoEnvio: 30,
    costoTotal: 846,
    tracking: "114-860498-0969857",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 18,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "RX 9060XT 16GB ASUS DUAL",
    tipoProducto: "GPU",
    costoProducto: 350,
    costoEnvio: 15,
    costoTotal: 365,
    tracking: "583913445",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 19,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "X870E-E ASUS ROG STRIX",
    tipoProducto: "MB",
    costoProducto: 300,
    costoEnvio: 15,
    costoTotal: 315,
    tracking: "583913445",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 20,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "ULTRA 9 285K",
    tipoProducto: "CPU",
    costoProducto: 560,
    costoEnvio: 5,
    costoTotal: 565,
    tracking: "583913445",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 21,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "ASUS TUF 850W 80+ GOLD FULL MODULAR",
    tipoProducto: "FUENTE",
    costoProducto: 107,
    costoEnvio: 25,
    costoTotal: 264,
    tracking: "583913445",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 22,
    fecha: "2025-11-21",
    cantidad: 1,
    producto: "COOLER MASTER 360 ELITE WHITE",
    tipoProducto: "AIO",
    costoProducto: 60,
    costoEnvio: 20,
    costoTotal: 80,
    tracking: "838944133",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 23,
    fecha: "2025-11-22",
    cantidad: 1,
    producto: "RTX 5070 ASUS PRIME 12GB",
    tipoProducto: "GPU",
    costoProducto: 0,
    costoEnvio: 0,
    costoTotal: 0,
    tracking: "114-893309-4884946",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 24,
    fecha: "2025-11-22",
    cantidad: 1,
    producto: "RTX 5060TI VENTUS 3X",
    tipoProducto: "GPU",
    costoProducto: 0,
    costoEnvio: 0,
    costoTotal: 0,
    tracking: "114-227087-6082864",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 25,
    fecha: "2025-11-22",
    cantidad: 1,
    producto: "PEDIDO",
    tipoProducto: "OTROS",
    costoProducto: 100,
    costoEnvio: 16,
    costoTotal: 116,
    tracking: "114-232518-1052931",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 26,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "Z890 AORUS ELITE WIFI ICE",
    tipoProducto: "MB",
    costoProducto: 100,
    costoEnvio: 15,
    costoTotal: 115,
    tracking: "565309374",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 27,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "ULTRA 7 285K",
    tipoProducto: "CPU",
    costoProducto: 220,
    costoEnvio: 20,
    costoTotal: 240,
    tracking: "565309374",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 28,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "MSI MAG CORE LIQUID AIOs 240MM BLACK",
    tipoProducto: "AIO",
    costoProducto: 50,
    costoEnvio: 15,
    costoTotal: 65,
    tracking: "565309374",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 29,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "RX 9070 OC 16GB SWIFT WHITE",
    tipoProducto: "GPU",
    costoProducto: 570,
    costoEnvio: 30,
    costoTotal: 600,
    tracking: "565551912",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 30,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "ULTRA 9 285K",
    tipoProducto: "CPU",
    costoProducto: 460,
    costoEnvio: 0,
    costoTotal: 460,
    tracking: "565551912",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 31,
    fecha: "2025-11-23",
    cantidad: 1,
    producto: "MSI MAG A15 360 BLACK",
    tipoProducto: "AIO",
    costoProducto: 100,
    costoEnvio: 0,
    costoTotal: 100,
    tracking: "565551912",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 32,
    fecha: "2025-11-24",
    cantidad: 1,
    producto: "Z890 ASUS TUF",
    tipoProducto: "MB",
    costoProducto: 160,
    costoEnvio: 20,
    costoTotal: 180,
    tracking: "114-8019150-4881933",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 33,
    fecha: "2025-11-24",
    cantidad: 1,
    producto: "RTX 5060 ASUS TUF",
    tipoProducto: "GPU",
    costoProducto: 320,
    costoEnvio: 25,
    costoTotal: 345,
    tracking: "113-0973807-5255744",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 34,
    fecha: "2025-11-24",
    cantidad: 1,
    producto: "RTX 5060 ASUS TUF",
    tipoProducto: "GPU",
    costoProducto: 320,
    costoEnvio: 25,
    costoTotal: 345,
    tracking: "113-0973807-5255744",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  },
  {
    id: 35,
    fecha: "2025-11-24",
    cantidad: 1,
    producto: "RTX 5060 ASUS TUF",
    tipoProducto: "GPU",
    costoProducto: 320,
    costoEnvio: 25,
    costoTotal: 345,
    tracking: "113-826307-435493",
    courier: "MK",
    cuenta: "Junior",
    estado: "",
    notas: "",
  }
];


const formatCurrency = (value: number) =>
  `$ ${value.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;

const ShipingTrackerPage = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Shipping tracker
            </p>
            <h1 className="text-3xl font-semibold leading-tight">Compras en tránsito</h1>
            <p className="text-muted-foreground">
              Revisa estado, costos y datos de envío de tus compras recientes.
            </p>
          </div>
        </header>

        <div className="hidden rounded-xl border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground shadow-sm md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] md:items-center">
          <span>Producto</span>
          <span>Estado</span>
          <span>Costo</span>
          <span>Tracking</span>
          <span>Courier</span>
        </div>

        <div className="flex flex-col gap-3">
          {purchases.map((purchase) => (
            <Card
              key={purchase.id}
              className="border border-border/80 bg-card shadow-sm transition-colors hover:border-primary/50"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-1 md:hidden">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Producto
                  </p>
                  <CardTitle className="text-lg">{purchase.producto}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {purchase.tipoProducto} • Cantidad: {purchase.cantidad}
                  </p>
                </div>
                <div className="hidden items-center gap-4 text-sm font-medium md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
                  <div className="truncate">
                    <span className="block text-base font-semibold text-foreground">
                      {purchase.producto}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {purchase.tipoProducto} • Cantidad: {purchase.cantidad}
                    </span>
                  </div>
                  <Badge variant="muted" className="w-fit">
                    {purchase.estado}
                  </Badge>
                  <span className="text-foreground">
                    {formatCurrency(purchase.costoTotal)}
                  </span>
                  <Badge variant="outline" className="w-fit">
                    {purchase.tracking}
                  </Badge>
                  <div className="flex items-center gap-2 text-foreground">
                    <Badge variant="secondary" className="w-fit">
                      {purchase.courier}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{purchase.cuenta}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 md:hidden">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Detail label="Estado" value={<Badge variant="muted">{purchase.estado}</Badge>} />
                  <Detail label="Fecha" value={purchase.fecha} />
                  <Detail label="Costo prod." value={formatCurrency(purchase.costoProducto)} />
                  <Detail label="Costo envío" value={formatCurrency(purchase.costoEnvio)} />
                  <Detail label="Costo total" value={formatCurrency(purchase.costoTotal)} />
                  <Detail
                    label="Courier"
                    value={
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{purchase.courier}</Badge>
                        <span className="text-xs text-muted-foreground">{purchase.cuenta}</span>
                      </div>
                    }
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Tracking
                  </p>
                  <Badge variant="outline" className="w-fit">
                    {purchase.tracking}
                  </Badge>
                </div>
                <p className="rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground">
                  {purchase.notas}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="flex flex-col gap-0.5">
    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
    <div className="font-medium text-foreground">{value}</div>
  </div>
);

export default ShipingTrackerPage;
