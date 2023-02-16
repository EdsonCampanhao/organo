import { useState } from 'react'
import Colaborador from '../Colaborador'
import './Times.css'



const Times = (props) => {



    return (
        props.colaboradores.length>0 &&
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        cargo={colaborador.cargo}
                        corPrimaria={colaborador.corPrimaria}
                    />)}
            </div>
        </section>
    )
}
export default Times