'use client'
import { modificarPedido } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";

function PedidoModificar({ pedido, repartidores, pizzas }) {
    const formId = useId()

    const [state, action, pending] = useActionState(modificarPedido, {})

    useEffect(() => {
        if (state.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state])

    const IDs = pedido.pizzas.map(p => p.id)

    return (
        <form action={action}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name="fecha_hora" type="datetime-local" defaultValue={new Date(pedido.fecha_hora).toISOString().split('Z')[0]} />
            <input name="nombre_cliente" placeholder="Nombre cliente" defaultValue={pedido.nombre_cliente} />
            <input name="direccion_cliente" placeholder="Dirección cliente" defaultValue={pedido.direccion_cliente} />


            <select name="repartidorId" defaultValue={pedido.repartidorId} key={pedido.repartidorId}>
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
                            name={`pizza${pizza.id}`}
                            value={pizza.id}
                            defaultChecked={IDs.includes(pizza.id)}
                        />

                        {pizza.nombre}

                    </label>
                )
            }


            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;