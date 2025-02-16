import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form className="flex flex-col gap-4" action={insertarPizza}>
            <input name="nombre" placeholder="Nombre" />
            <input name="precio" type='number' step={0.01} min={0} />
            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar pizza</button>
        </form>

    );
}

export default PizzaInsertar;