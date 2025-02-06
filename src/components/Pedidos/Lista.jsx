import { obtenerPedidos } from "@/lib/data";
import Link from "next/link";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos()

    return (
        <div>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`}> {new Date(pedido.fecha_hora).toLocaleString()} </Link>
                            <p>{pedido.nombre_cliente}</p>
                            <p>{pedido.direccion_cliente}</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}