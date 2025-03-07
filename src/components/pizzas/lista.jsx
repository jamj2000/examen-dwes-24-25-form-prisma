import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PizzaInsertar from "./insertar";
import PizzaModificar from "./modificar";
import PizzaEliminar from "./eliminar";



export default async function Pizzas() {
    const pizzas = await obtenerPizzas()

    return (
        <div className="flex flex-col gap-4">
            <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar</p>}>
                <PizzaInsertar />
            </Modal>

            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <Link href={`/pizzas/${pizza.id}`} className="font-bold cursor-pointer">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio} €</p>


                            <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</p>}>
                                <PizzaModificar pizza={pizza} />
                            </Modal>

                            <Modal openElement={<p className="inline p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</p>}>
                                <PizzaEliminar pizza={pizza} />
                            </Modal>

                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}