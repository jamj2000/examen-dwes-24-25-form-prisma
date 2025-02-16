import { modificarPizza } from "@/lib/actions";

function PizzaModificar({ pizza }) {
    return (
        <form className="flex flex-col gap-4" action={modificarPizza}>
            <input type="hidden" name="id" defaultValue={pizza.id} />
            <input name="nombre" defaultValue={pizza.nombre} />
            <input name="precio" type='number' step={0.01} min={0} defaultValue={pizza.precio} />

            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default PizzaModificar;