import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttontext'

export  function Details() {

    return(
        <Container>
            <Header/>

            <main>
                <Content> 
                    <ButtonText title="delete note"/>

                    <h1>
                        introducao ao react
                    </h1>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio. Quo maxime voluptate autem deserunt labore! Error alias sapiente praesentium ullam quae, quidem, autem ipsa necessitatibus porro voluptates esse odio.</p>

                    <Section title='useful links'>
                        <Links>
                            <a href="#">links 1</a>
                            <a href="#">links 2</a>
                        </Links>
                    </Section>

                    <Section title="markers">
                        <Tag title="express" />
                        <Tag title="nodejs" /> 
                    </Section>

                    <Button title='login' loading/>
                </Content>
            </main>
        </Container>
    )
}