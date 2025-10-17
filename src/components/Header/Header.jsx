import "./Header.css"

function Header(){
    return(
        <header>
            <h3 className="Header__Title">SHINE</h3>
            <div className="Header__AreaButtonBox">
                <a href="#LongImgBox" className="AreaButtonBox_Button"> ОТЕДЛ</a>
                <p className="AreaButtonBox_Button"> ОТЕДЛ</p>
                <p className="AreaButtonBox_Button"> ОТЕДЛ</p>
                <p className="AreaButtonBox_Button"> ОТЕДЛ</p>
                <div className="Header__CordsBox">
                    <p className="CordsBox_Cords">- - - -</p>
                </div>
            </div>
        </header>
    )
}

export default Header