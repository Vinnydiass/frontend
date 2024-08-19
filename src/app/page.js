import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}
      <Cabecalho/>
      <a href="/fundamentos">Pagina fundamentos</a> <br/>
      <Link href="/fundamentos">Página fundamentos</Link>
    </main>
  );
}
