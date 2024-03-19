import { Container } from './styles'

export function Button({title, loading = false, ...rest}) {

    return(
        <Container 
        type='button'
        disable={loading}
        {...rest}    /* insire todas as propriedades sem precisar inserir elas manualmente*/
        >
            { loading? 'carregando...' : title }
        </Container>
    )
}