import { obtenerRepartidores } from "@/lib/data";


export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()

    return (
        <div>
            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{repartidor.nombre}</p>
                            <p>{repartidor.telefono}</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}