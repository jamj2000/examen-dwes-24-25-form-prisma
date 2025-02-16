import Pedidos from "@/components/pedidos/lista";
import { Suspense } from "react";


function PaginaPedidos() {

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">LISTA DE PEDIDOS</h1>

            <Suspense fallback={"Obteniendo pedido ..."}>
                <Pedidos />
            </Suspense>
        </div>
    )

}

export default PaginaPedidos;

