import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Habilidades from './pages/Habilidades'
import Contatos from './pages/Contatos'
import Header from './components/Header'


function RoutesApp() {
     return (
          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/perfil' element={<Perfil/>}/>
                    <Route path='/skills' element={<Habilidades/>}/>
                    <Route path='/contatos' element={<Contatos/>}/>
               </Routes>
          
          </BrowserRouter>
     )
}

export default RoutesApp