import { Link } from 'react-router-dom'

function Habilidades() {

     return (
          <div className="habilidades-container">
               <div className="habilidades-names">
                    <h2>HABILIDADES</h2>

                    <ul>
                         <li>Html & CSS</li>
                         <li>Javascript</li>
                         <li>React JS/Native</li>
                         <li>MySQL</li>
                         <li>Python</li>
                         <li>Java POO</li>
                         <li>C/C#</li>
                    </ul>


                    <Link to='/contatos' className='link'>Próximo...</Link>
               </div>
          </div>
     )
}

export default Habilidades