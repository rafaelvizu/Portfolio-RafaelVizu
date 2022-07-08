import { Link } from 'react-router-dom'


function Contatos() {
     return (
          <div className='contatos-container'>
               <div>
                    <h2>CONTATOS</h2>
                    <a href="mailto:rafaelvizu2@gmail.com" target='_blank'>Email</a>
                    <a href="https://www.linkedin.com/in/rafael-vizu/" target='_blank'>Linkedin</a>
                    <a href="https://github.com/rafaelvizu" target='_blank'>GitHub</a>

                    <hr />
                    <Link to='/' className='link'>Home</Link>
               </div>
               
          </div>
     )
}


export default Contatos