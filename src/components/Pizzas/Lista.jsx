import { obtenerPizzas } from "@/lib/data";


export default async function Pizzas() {
    const pizzas = await obtenerPizzas()

    return (
        <div>
            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{pizza.nombre}</p>
                            <p>{pizza.precio}</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}