import React from "react"
import "./Faq.css"

function FAQ () {
    return (
        <div className="all-FAQ">
            <div className="faquestions">
                <h4>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h4>
                <h5>Ответы на вопросы, которые могут возникнуть при работе с программным обеспечением.</h5>
            </div>
            <div className="all-faqitem">
                <div className="faqitem">
                    <p><b>Как происходит взлом учетной записи Вконтакте при помощи программного обеспечения?</b><br />Для удаленного взлома аккаунта с помощью VK-Tracker используется эксплойт Vkontakte и уязвимость протокола сотовых сетей. Комбинация методов позволяет выявить номер телефона, к которому привязан аккаунт социальной сети по URL, инициировать процедуру восстановления доступа и перехватить SMS с кодом подтверждения операции. После чего аккаунт будет авторизован на виртуальном устройстве, а данные будут отображены в личном кабинете.</p>
                </div>
                <div className="faqitem">
                    <p><b>Сколько сессий взлома аккаунтов я могу запустить с одного аккаунта VK-Трекер?</b><br />Возможен запуск до 5 активных сессий взлома одновременно. При одновременном запуске нескольких сессий стоимость взлома будет ниже — цена зависит от количества запущенных сессий. Больше информации о читайте в тарифах.</p>
                </div>
                <div className="faqitem">
                    <p><b>Необходима ли подготовка моего устройства для работы с VK-Трекер?</b><br />Нет, сервис является веб-приложением, то есть для поддержания всех необходимых для работы программного обеспечения мощностей используется стороннее оборудование, а вы взаимодействуете исключительно с браузерным интерфейсом. Вам не нужно скачивать и устанавливать каких-либо приложений.</p>
                </div>
                <div className="faqitem">
                    <p><b>Может ли владелец учетной записи Вконтакте узнать, что он был взломан?</b><br />Идентификация взлома механизмами безопасности соцсети невозможна. Владелец аккаунта может узнать о взломе только в случае, если вы будете осуществлять какую-либо активность при авторизации в учетную запись.</p>
                </div>
                <div className="faqitem">
                    <p><b>В течение какого времени будет активен доступ к данным взломанной учетной записи?</b><br />Наша ценовая политика подразумевает единоразовую оплату сессии взлома, то есть, единожды оплатив взлом, вы получаете постоянный доступ к данным учетной записи Vkontakte — как прошлым, так и будущим. Единственное, что может помешать регулярному обновлению пакетов данных — смена пароля от учетной записи ее владельцем.</p>
                </div>
                <div className="faqitem">
                    <p><b>Получу ли я пароль от взломанной учетной записи?</b><br />Да, вы сможете увидеть пароль от взломанной учетной записи в личном кабинете.</p>
                </div>
                <div className="faqitem">
                    <p><b>Смогу ли я видеть удаленные сообщения?</b><br />Нет, удаленные сообщения не хранятся в журнале данных.</p>
                </div>
                <div className="faqitem">
                    <p><b>Смогу ли я отправлять сообщения со взломанной учетной записи?</b><br />Осуществление какой-либо активности во взломанном аккаунте через интерфейс невозможно. Мы также не рекомендуем использование полученного пароля для авторизации и осуществления каких-либо действий в учетной записи — это может привести к разоблачению взлома, последующей смене пароля ее владельцем и потере возможности обновлять архив данных.</p>
                </div>
                <div className="faqitem">
                    <p><b>Каков размер получаемого после взлома архива данных?</b><br />Размер архива зависит от количества файлов, находящихся в архиве и их размера.</p>
                </div>
                <div className="faqitem">
                    <p><b>Могу я получить доступ к данным аудио- и видеозвонков?</b><br />Возможен просмотр журнала звонков, то есть вы сможете узнать когда и кому осуществлялись звонки. Получение данных о содержании звонков невозможно.</p>
                </div>
                <div className="faqitem">
                    <p><b>Какие существуют способы оплаты аккаунта?</b><br />Оплата аккаунта возможна через платежные системы Visa и Mastercard, электронные кошельки QIWI и Yandex.Money, через криптовалютные платформы Bitcoin, Ethereum, Bitcoin Cash, Monero, Ripple</p>
                </div>
                <div className="faqitem">
                    <p><b>Что делать, если я забыл пароль от аккаунта?</b><br />Для обеспечения максимальной анонимности мы используем сквозное шифрование при работе с паролями, то есть пароль от вашего аккаунта не хранится в нашей базе данных. При утере пароля вам придется регистрировать новый аккаунт.</p>
                </div>
            </div>
        </div>
    )
}

export default FAQ