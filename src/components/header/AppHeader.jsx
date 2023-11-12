import "./AppHeader.css"

function AppHeader () {
    return (
        <div className="all-header">
                <div className="downstream-header">
                    <div className="logo-div">
                    <img src="C:\Users\samye\OneDrive\Desktop\vk-breaker\src\img\logo+name.png" alt="Logo" />
                </div>
                <div className="info-div">
                    <a href="#">Отзывы Клиентов </a>
                    <a href="#">Блог</a>
                    <a href="#">Политика Конфиденциальности</a>
                    <a href="#">О Нас </a>
                    <a href="#">Контакты</a>
                </div>
                <div className="login-div">
                    <button>Вход / Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader