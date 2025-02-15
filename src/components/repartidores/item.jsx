import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id)
    // console.log(repartidor);

    if (!repartidor) notFound()

    return (
        <div>
            <p>{repartidor.nombre}</p>
            <p>{repartidor.telefono}</p>
        </div>
    );
}

