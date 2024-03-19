import { Conteiner, Brend, Menu, Search, Content, NewNote} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
    return(
        <Conteiner>
            <Brend>
                <h1>Anotacoes</h1>
            </Brend>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/> </li>
                <li><ButtonText title="React"/> </li>
                <li><ButtonText title="Nodejs"/> </li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Conteiner>
    )
}