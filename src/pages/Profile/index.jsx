import { Container, Form, Avatar} from "./styles";
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft, FiUser, FiMail, FiLock,FiCamera } from "react-icons/fi";

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/luizPhelipe77" 
                    alt="foto do usuario" 
                    />
                
                    <label htmlfor="avatar">
                    <FiCamera />

                    <input 
                    id="avatar"
                    type="file"
                    />
                    </label>
                </Avatar>

                <Input 
                    placeholder="nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="text"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova Senha"
                    type="text"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>

        </Container>
    )
}