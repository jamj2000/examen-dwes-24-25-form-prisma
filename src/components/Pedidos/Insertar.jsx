import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return (
        <form action={insertarPedido}>
            <input name="fecha_hora" type="datetime-local" />
            <input name="telefono" placeholder="Teléfono" />
            <input name="nombre_cliente" placeholder="Nombre cliente" />
            <input name="direccion_cliente" placeholder="Dirección cliente" />
            <button className="border-2 border-black">Insertar pedido</button>
        </form>

    );
}

export default PedidoInsertar;