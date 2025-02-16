import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({ repartidor }) {
    return (
        <form className="flex flex-col gap-4" action={modificarRepartidor}>
            <input type="hidden" name="id" defaultValue={repartidor.id} />
            <input name='nombre' defaultValue={repartidor.nombre} />
            <input name='telefono' defaultValue={repartidor.telefono} />

            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default RepartidorModificar;