import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}
      <Cabecalho titulo="Página inicial" sub="testesub" />
      <Link href="/fundamentos">Página fundamentos</Link> <br/>
      <Link href="/clientes">Página clientes</Link>
    </main>
  );
}
