import "./FirstBlock.css"

function FirstBlock(){
    return(
        <div className="FirstBlock Block" id="FirstBlock">
            <div className="FirstBlock__PromoArea">
                <h1 className="PromoArea__Title">ТЕКСТ ТЕЕЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ </h1>
                <p className="PromoArea__InfoText">
                    --------  ------ ------
                    --------------- -------
                    ----- -------------- --------- -------- ---------
                </p>
                <button className="PromoArea__Button"> ----- ------ </button>
            </div>

            <div className="FirstBlock__ImgArea">
                <img className="ImgArea__img" src="/img/LogoPromo.png" alt="Логотип" height={200} width={200} />
            </div>
        </div>
    )
}

export default FirstBlock