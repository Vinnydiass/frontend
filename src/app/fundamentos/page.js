import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function fundamentos(){


   

    return(
        <>
        <Cabecalho/>

        <Container>
        <Alert>
            Atenção
        </Alert>
        <Link href="/">Pagina inicial</Link><br/>
        <Link href="/clientes">Página Clientes</Link>
      
        <h1>Fundamentos</h1>
       
        <Cabecalho/> 
        </Container>
        </>
        
    )
}



















