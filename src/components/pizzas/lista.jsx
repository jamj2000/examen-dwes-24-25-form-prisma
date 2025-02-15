import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";
import Modal from "../modal";
import PizzaInsertar from "./insertar";
import PizzaModificar from "./modificar";
import PizzaEliminar from "./eliminar";


export default async function Pizzas() {
    const pizzas = await obtenerPizzas()

    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar</p>}>
                <PizzaInsertar />
            </Modal>

            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/pizzas/${pizza.id}`}>{pizza.nombre}</Link>
                            <p>{pizza.precio}</p>

                            <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                                <PizzaModificar pizza={pizza} />
                            </Modal>

                            <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
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