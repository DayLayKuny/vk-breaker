import "./Footer.css"
import { AiOutlineComment } from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";

function Footer () {
    return (
            <div className="all-footer">
                <div className="downstream-footer">
                    <hr></hr>
                    <div className="footer-item">
                        <h6>ИНФОРМАЦИЯ</h6>
                        <a href="/price">Стоимость и оплата</a>
                        <a href="#">Руководство</a>
                        <a href="#">Блог</a>
                    </div>
                    <div className="footer-item">
                        <h6>УСЛОВИЯ</h6>
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Партнерская программа</a>
                        <a href="#">Пользовательское соглашение</a>
                        <a href="#">Политика Cookies</a>
                    </div>
                    <div className="footer-item">
                        <h6>СОЦИАЛЬНЫЕ</h6>
                        <a href="#"><FaRegCommentDots className="fames"/> Поддержка 24/7</a>
                        <a href="/faq"><TbMessageCircleQuestion className="fames"/> Вопросы</a>
                        <a href="#"><AiOutlineComment className="fames"/> Отзывы</a>
                    </div>
                    <div className="footer-item">
                        <h6>БЕЗОПАСНЫЕ ПЛАТЕЖИ</h6>
                        <div className="allfs">
                            <div className="first">
                                <img src="https://pngimg.com/d/visa_PNG30.png" alt="Visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/2560px-Mir-logo.SVG.svg.png" alt="Mir" className="first1" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/QIWI_logo.svg/2560px-QIWI_logo.svg.png" alt="Qiwi" className="first1"/>
                            </div>
                            <div className="second">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="MasterCard" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Maestro_logo.png/640px-Maestro_logo.png" alt="Maestro" />
                                <img src="https://billfort.com/uploads/product/c5e6000082a805eed04917c616acda79cfb2199b.jpg" alt="Yandex Money" className="yu"/>
                            </div>                            
                        </div>
                    </div>
                    <div className="copyright">
                        <h6>ОБЩИЕ УСЛОВИЯ:</h6>
                        <p className="pcopy">Услуги могут использоваться только в законных и законных целях авторизованными пользователями, и настоящим вы уведомляетесь, что использование продукта или услуги для любых других целей может нарушать местное, государственное и/или федеральное законодательство. Вы должны уведомить пользователей мобильного телефона о том, что они находятся под наблюдением, в противном случае это может привести к нарушению законов и правил вашей страны. Упомянутые товарные знаки используются исключительно с целью описания совместимости смартфонов и носителей для нашего программного обеспечения для мониторинга мобильных телефонов.</p>
                        <a href="#">Взломать Вконтакте</a>
                        <p className="topmarg">Использование сайта подразумевает согласие с пользовательским соглашением. 18 +</p>
                        <h6 className="copyrightres">Copyright ©2023 All Rights Reserved. Все торговые марки являются собственностью их соответствующих владельцев.</h6>
                    </div>
                </div>
            </div>         
    )
       
}

export default Footer