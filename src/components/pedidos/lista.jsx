import { obtenerPedidos, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "../modal";
import PedidoInsertar from "./insertar";
import PedidoModificar from "./modificar";
import PedidoEliminar from "./eliminar";


export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()
    const pizzas = await obtenerPizzas()

    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar</p>}>
                <PedidoInsertar repartidores={repartidores} pizzas={pizzas} />
            </Modal>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pedidos/${pedido.id}`}> {new Date(pedido.fecha_hora).toLocaleString()} </Link>
                            <p>{pedido.nombre_cliente}</p>
                            <p>{pedido.direccion_cliente}</p>


                            <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                                <PedidoModificar pedido={pedido} repartidores={repartidores} pizzas={pizzas} />
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