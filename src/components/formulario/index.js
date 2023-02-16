import './formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {

    const times = [
        'programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]


    const [time,setTime] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log(props)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time

        })
        setNome('')
        setCargo('')
        setImagem('')
        
        
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label='Nome'
                    obrigatorio={true}
                    placeholder='digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label='cargo'
                    obrigatorio={true}
                    placeholder='digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='imagem '
                    placeholder='digite a url da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                 itens={props.nomeDosTimes}
                 label='Times'
                 valor={time}
                 aoAlterado={valor=>setTime(valor)}
                  />
                <Botao type='submit'>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario