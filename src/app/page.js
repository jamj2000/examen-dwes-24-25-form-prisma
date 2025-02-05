import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href="/repartidores" className="block text-2xl font-bold">REPARTIDORES</Link>
      <Link href="/pedidos" className="block text-2xl font-bold">PEDIDOS</Link>
      <Link href="/pizzas" className="block text-2xl font-bold">PIZZAS</Link>

    </div>
  );
}
