import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { Container, Form, imgLogin } from "./styles";

export function SignUp() {
    return(
        <Container>
            <imgLogin />

            <Form>
                <h1>Notes</h1>
                <p>aplicacao para salvar e gerenciar links.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                />

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

                <Button title="Cadastrar" />

                <Link to="/">   
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    );
}