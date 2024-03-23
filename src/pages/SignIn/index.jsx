import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FiMail, FiLock} from 'react-icons/fi'

import { Container, Form, imgLogin } from "./styles";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>aplicacao para salvar e gerenciar links.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                />
                <Input 
                    placeholder="senha"
                    type="password"
                    icon={ FiLock }
                />

                <Button title="Entrar" />

                <Link to="/Register">
                    criar conta
                </Link>
            </Form>

            <imgLogin />
        </Container>
    );
}