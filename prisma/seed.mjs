import { PrismaClient } from '@prisma/client';

import repartidores from './repartidores.json' with { "type": "json" }
import pizzas from './pizzas.json'  with { "type": "json" }
import pedidos from './pedidos.json'  with { "type": "json" }

const prisma = new PrismaClient();


// Eliminar contenido de las tablas
const resetDatabase = async () => {
    await prisma.pedido.deleteMany();
    await prisma.repartidor.deleteMany();
    await prisma.pizza.deleteMany();
};


const load = async () => {
    try {
        // reset database
        await resetDatabase();

        await prisma.repartidor.createMany({ data: repartidores });
        console.log(`Repartidores insertados`);

        await prisma.pizza.createMany({ data: pizzas });
        console.log(`Pizzas insertadas`);

        await prisma.pedido.createMany({ data: pedidos });
        console.log(`Pedidos insertadas`);


    } catch (error) {
        console.error("Error al insertar datos:", error);
    } finally {
        await prisma.$disconnect();
    }
};


load();