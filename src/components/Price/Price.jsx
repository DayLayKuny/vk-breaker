import React from "react"
import "./Price.css"
import { MdOutlineDoneOutline } from "react-icons/md";

function Price () {
    return (
        <div className="all-price">
            <div className="all-amount">
                <div className="downstream-amount">
                <div className="amount-info">
                        <h3>Стоимость и оплата</h3>
                        </div>
                    <div className="divp">
                        <p>Заказывая взлом нескольких профилей, или пользуясь нашим сервером повторно, вы получаете гарантированную скидку.</p>
                    </div>
                    <div className="actions">
                        <div className="accounts-amount">
                            <h6>Один аккаунт</h6>
                            <p>Все возможности для тарифа базовый</p>
                            <h5>899 /руб.</h5>
                        </div>
                        <div className="accounts-amount aa1">
                            <h6>Три аккаунта</h6>
                            <p>Все возможности для тарифа оптимальный</p>
                            <h5>1999 /руб.</h5>
                        </div>
                        <div className="accounts-amount aa1">
                            <h6>Пять аккаунтов</h6>
                            <p>Все возможности для тарифа бизнес</p>
                            <h5>2999 /руб.</h5>
                        </div>
                    </div>
                </div>
            <div className="amount-info1">
                
                <h3>Какие доступы я получу?</h3>
                <p>Важнейшая и приятная особенность сервиса в том, что средства с вашего счета спишутся лишь после того, как сессия взлома успешно завершена, и вы получили данные для авторизации от аккаунта. Мы целенаправленно отказались от предоплатной модели — так мы гарантируем успех каждому пользователю сервиса.</p>
            </div>
            <div className="guarantees">
                <div className="guaritem">
                    <MdOutlineDoneOutline className="donefa" />
                    <p><b>Доступ к истории сообщений</b><br /> Для прослушивание голосовых сообщений в интерфейсе Панели управления предусмотрен специальный плеер.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Price