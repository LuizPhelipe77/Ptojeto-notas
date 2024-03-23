import { FiPlus, FiSearch } from 'react-icons/fi';

import { Conteiner, Brend, Menu, Search, Content, NewNote} from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/buttontext";   /*aqui fica dando erro*/

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
                <Input placeholder="search by title" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="minhas notas"> 
                    <Note data={{
                        title: 'react', 
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'Nodejs'},
                        ]
                        }} 
                        />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                create note
            </NewNote>
        </Conteiner>
    )
}