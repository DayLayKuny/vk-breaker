import "./AppHeader.css"

function AppHeader () {
    return (
        <div className="all-header">
            <div className="downstream-header">
                <div className="logo-div">
                    <img src="https://vzlom-vk.ru/images/logo-start.png" alt="Logo"></img>
                </div>
                <div className="info-div">
                    <a href="#">Отзывы Клиентов </a>
                    <a href="#">Блог</a>
                    <a href="#">Политика Конфиденциальности</a>
                    <a href="#">О Нас </a>
                    <a href="#">Контакты</a>
                </div>
                <div className="login-div">
                    <button>Вход/Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader