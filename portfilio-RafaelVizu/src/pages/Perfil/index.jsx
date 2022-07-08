import {Link} from 'react-router-dom'

function Perfil() {

     return (
          <div className="perfil-container">
               <div className="perfil-info">
                    <h2>SOBRE MIM</h2>

                    <p>Olá, meu nome é Rafael, tenho 18 anos. Sou desenvolvedor desde os  15 anos. Nessa jornada    tive experiencia com diversas tecnologias, onde fui me aprimorando.</p>

                    <h2>EDUCAÇÃO</h2>
                    
                    <h3>Ciência da Computação</h3>

                    Centro Universitário Estácio de Ribeirão Preto

                    <p>2022-2025</p>
                    <Link to='/skills' className='link'>Próximo...</Link>
               </div>
          </div>
     )
}


export default Perfil