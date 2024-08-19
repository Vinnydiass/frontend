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
        <a href="/">Pagina inicial</a> <br/>
        <Link href="/">Pagina inicial</Link>
      
        <h1>Fundamentos</h1>
       
        <Cabecalho/>
        </Container>
        </>
        
    )
}



















