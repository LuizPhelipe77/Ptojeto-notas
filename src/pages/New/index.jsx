import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'  
import { Noteitem } from '../../components/Noteitem' 
import { Section } from '../../components/Section' 
import { Button } from '../../components/Button' 

import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observacões" />
                    
                    <Section title="Links uteis">
                        <Noteitem value="hwwtsgfdd"/>
                        <Noteitem isNew  placeholder ="Novo link" />
                    </Section> 

                    <Section title="Marcadores"> 
                        <div className='tags'>
                            <Noteitem value="react"/>
                            <Noteitem isNew  placeholder ="Novo tag" />
                        </div>  
                    </Section>
                    
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}