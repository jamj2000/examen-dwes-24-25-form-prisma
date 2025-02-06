import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos?</h1>
            <p>PEDIDO: {pedido.nombre}</p>
            <p>FECHA Y HORA: {pedido.fecha_hora}</p>
            <p>NOMBRE CLIENTE: {pedido.nombre_cliente}</p>
            <p>DIRECCIÓN CLIENTE: {pedido.direccion_cliente}</p>
            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PedidoEliminar;