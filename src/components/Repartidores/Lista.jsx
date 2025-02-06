import { obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "../Modal";
import RepartidorInsertar from "./Insertar";
import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";


export default async function Repartidores() {
    const repartidores = await obtenerRepartidores()



    return (
        <div>
            <Modal openElement={<p className="inline border-2 border-black">Insertar</p>}>
                <RepartidorInsertar />
            </Modal>
            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <Link href={`/repartidores/${repartidor.id}`}>{repartidor.nombre}</Link>
                            <p>{repartidor.telefono}</p>

                            <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                                <RepartidorModificar repartidor={repartidor} />
                            </Modal>

                            <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                                <RepartidorEliminar repartidor={repartidor} />
                            </Modal>

                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}