'use client'
import { insertarPedido } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";

function PedidoInsertar({ repartidores, pizzas }) {

    const formId = useId()

    const [state, action, pending] = useActionState(insertarPedido, {})

    useEffect(() => {
        if (state.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state])

    return (
        <form action={action}>
            <input name="fecha_hora" type="datetime-local" />
            <input name="nombre_cliente" placeholder="Nombre cliente" />
            <input name="direccion_cliente" placeholder="Dirección cliente" />

            <select name="repartidorId">
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>


            {
                pizzas.map(pizza =>
                    <label key={pizza.id}>
                        <input
                            type="checkbox"
                            name={`pizza${pizza.id}`} />

                        {pizza.nombre}

                    </label>
                )
            }

            <button className="border-2 border-black">Insertar pedido</button>
        </form>

    );
}

export default PedidoInsertar;