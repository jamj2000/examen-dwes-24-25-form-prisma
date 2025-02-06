import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name="fecha_hora" type="datetime-local" defaultValue={new Date(pedido.fecha_hora)} />
            <input name="telefono" placeholder="Teléfono" defaultValue={pedido.telefono} />
            <input name="nombre_cliente" placeholder="Nombre cliente" defaultValue={pedido.nombre_cliente} />
            <input name="direccion_cliente" placeholder="Dirección cliente" defaultValue={pedido.direccion_cliente} />

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;