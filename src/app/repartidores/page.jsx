import Repartidores from "@/components/repartidores/lista";
import { Suspense } from "react";


function PaginaRepartidores() {

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">LISTA DE REPARTIDORES</h1>

            <Suspense fallback={"Obteniendo repartidore ..."}>
                <Repartidores />
            </Suspense>
        </div>
    )

}

export default PaginaRepartidores;

