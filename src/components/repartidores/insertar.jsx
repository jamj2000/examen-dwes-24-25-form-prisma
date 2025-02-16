import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form className="flex flex-col gap-4" action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre" />
            <input name="telefono" placeholder="Teléfono" />
            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar repartidor</button>
        </form>

    );
}

export default RepartidorInsertar;