import'./Botao.css'

const Botao=(props)=>{
    return(
        <button className='Botao' type={props.type}> {props.children}</button>
    )
}

export default Botao