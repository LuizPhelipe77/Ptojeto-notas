import { Container, Profile, Logout } from './styles'
import { RiShutDownLine} from 'react-icons/ri'


export function header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/LuizPhelipe77.png"/>

                <div>
                    <span>bem-vindo</span>
                    <strong>luiz phelipe</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}