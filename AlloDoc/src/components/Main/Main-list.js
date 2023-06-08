import './Main.css'
import logodoc from "../Main/mainNkar/front-images.png"
export default () => {
    return (
        <div className="mejtexMec">
            <div className='main-text'>
                <div className='main-text1'>
                    <h1>Онлайн консультации от
                        врачей специалистов 24/7</h1>
                    <div className='main-text2'><h3>Проконсультируйтесь сейчас или по предварительной записи со своего компьютера или c помощью нашего приложения, доступного в App Store и Google Play</h3></div>
                    <div className='knopka'>
                        <button className='knopka1'>Записаться</button>
                        <button className='knopka2'>Записаться</button>
                    </div>
                </div>
               
            </div>
            <div className='imgdoc'><img src={logodoc}></img></div>
            
        </div>
    )
}