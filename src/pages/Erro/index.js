import { Link } from 'react-router-dom';
import './styles.css';



const Erro = () =>{
    return(
        <div className="not-found">
            <h1 className="error">Erro 404!</h1>
            <h2 className="error-message">Parece que a página que você tentou acessar foi dar um rolê,<br/>mas não se preocupe, ela será encontrada!</h2>
            <Link className="error-link">Enquanto isso, por que não tenta encontrar um novo filme?</Link>
        </div>
    )
}

export default Erro;