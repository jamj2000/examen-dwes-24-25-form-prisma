import { obtenerPedidos, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "../Modal";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()

    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar</p>}>
                <PedidoInsertar repartidores={repartidores} />
            </Modal>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`}> {new Date(pedido.fecha_hora).toLocaleString()} </Link>
                            <p>{pedido.nombre_cliente}</p>
                            <p>{pedido.direccion_cliente}</p>


                            <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                                <PedidoModificar pedido={pedido} repartidores={repartidores} />
                            </Modal>

                            <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                                <PedidoEliminar pedido={pedido} />
                            </Modal>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}