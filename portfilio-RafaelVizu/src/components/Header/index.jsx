import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  
  return (
    <div>
          <header>
               <Link to='/' className='linkH'>Home</Link>
               <Link to='/perfil' className='linkH'>Sobre</Link>
               <Link to='/skills' className='linkH'>Habilidades</Link>
               <Link to='/contatos' className='linkH'>Contatos</Link>
          </header>
    </div>
  )
}

export default Header
