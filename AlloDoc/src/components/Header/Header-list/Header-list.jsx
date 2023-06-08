import { Link } from 'react-router-dom'
import logo1 from '../header-img/Ресурс 1 1 (1).png'
import zangak from "../header-img/Уведомления.svg"
import user from "../header-img/Group 532.png"
import strelka from "../header-img/Vector.svg"
export default ()=>{
    return(
        <header>
            <div className='lezu'>
                <span>RU</span>
                <span>EN</span>
            </div>
        <div className="Header">
            <div className="logo">
                <img src={logo1}></img>
            </div>
            <div className='manu'>
            <nav className='nav-bar'>
                <Link className='nav-href'>Как пользоваться?</Link>
                <Link className='nav-href'>Мои записи</Link>
                <Link className='nav-href'>Записаться к врачу</Link>
            </nav>
            <div className='zangak'><img src={zangak} /></div>
            <img src={user}></img>
            <div className='anun-user'>
                <span>Артем Свиридов</span>
                <div className='slaq'><img src={strelka}></img></div>
            </div>
            </div>
        </div>
        </header>
    )
}