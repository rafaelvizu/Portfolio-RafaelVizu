import { Link } from 'react-router-dom'


function Home() {
     return (
          <div className="home-container">
               <div className="home-profile">
                    <img src="https://raw.githubusercontent.com/rafaelvizu/Portfolio-RafaelVizu/main/img/myImg.jpg"/>
                    <h1>Rafael Vizú</h1>

                    <Link to='/perfil' className='link'>Ver Perfil</Link>
                    
               </div>
          </div>
     )
}


export default Home