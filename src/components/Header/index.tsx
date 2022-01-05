import { Link } from 'react-router-dom'
import {
    Container,
    Content
} from './style'

export function Header() {
    return (
        <Container>
            <Content>
                <h1><i>PD -<span> Buscar</span></i></h1>
                <nav className="topnav">
                    <ul>
                        <Link to="/">
                            <li>Gerar atividade aleatória</li>
                        </Link>

                        <Link to="/random">
                            <li>Gerar atividade pelo tipo</li>
                        </Link>

                        <Link to="/key">
                            <li>Gerar atividade pela chave</li>
                        </Link>

                        <Link to="/favorite">
                            <li>Favoritos</li>
                        </Link>
                    </ul>
                </nav>
            </Content>
        </Container>
    )
}