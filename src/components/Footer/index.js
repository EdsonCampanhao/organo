import './Footer.css'

const Footer=()=>{
    return(
<footer>
          <div className='footer'>
           <div className='contatos'>
            <ul>
              <li><img src='../imagens/face.png'/></li>
              <li><img src='../imagens/tw.png'/></li>
              <li><img src='../imagens/ig.png'/></li>
            </ul>
           </div>
           <img src='../imagens/logo.png'/>

           <p> Desenvolvido pela alura</p>

          </div>
        </footer>
    )
}

export default Footer