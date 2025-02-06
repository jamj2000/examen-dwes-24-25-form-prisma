import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos?</h1>
            <p>FECHA Y HORA: {new Date(pedido.fecha_hora).toLocaleString()}</p>
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