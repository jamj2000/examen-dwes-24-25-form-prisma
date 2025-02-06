import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
    const pedido = await obtenerPedido(id)
    // console.log(pedido);

    if (!pedido) notFound()

    return (
        <div>
            <p>{new Date(pedido.fecha_hora).toLocaleString()}</p>
            <p>{pedido.nombre_cliente}</p>
            <p>{pedido.direccion_cliente}</p>
        </div>
    );
}

