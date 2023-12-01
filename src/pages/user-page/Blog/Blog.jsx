import React from "react";
import "./Blog.css";
import { FaEye } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";

function Blog () {
    return (
        <div className="all-blog">
            <div className="downstream-blog">
                <div className="text-info-blog">
                    <h3>Наш новостной уголок</h3>
                    <p>Здесь вы найдете самые свежие и интересные новости из разных областей жизни. Наша команда тщательно отбирает и анализирует новости, чтобы предоставить вам актуальную информацию и интересные материалы.</p>
                </div>
                <div className="main-news">
                    <div className="news-item">
                        <div className="down-main-news">
                            <h4>Китайская Хакерская Группировка Storm-0558: Атака на Госдепартамент США и Ключевые Результаты Расследования</h4>
                            <p>Расследование атаки китайской хакерской группировки Storm-0558 на Госдепартамент США: узнайте, как компрометация учетных записей Outlook и похищение ключа подписи MSA привели к утечке данных и как ведомство реагирует на инцидент. Подробный анализ произошедшего и меры по обеспечению кибербезопасности....</p>
                        </div>
                        <div className="down-info-news">
                            <p>
                                <FaEye  className="feye"/>
                                100
                            </p>
                            <p>
                                <GoHeartFill className="feye"/>
                                24
                            </p>        
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="down-main-news">
                            <h4>Китайская Хакерская Группировка Storm-0558: Атака на Госдепартамент США и Ключевые Результаты Расследования</h4>
                            <p>Расследование атаки китайской хакерской группировки Storm-0558 на Госдепартамент США: узнайте, как компрометация учетных записей Outlook и похищение ключа подписи MSA привели к утечке данных и как ведомство реагирует на инцидент. Подробный анализ произошедшего и меры по обеспечению кибербезопасности....</p>
                        </div>
                        <div className="down-info-news">
                            <p>
                                <FaEye  className="feye"/>
                                100
                            </p>
                            <p>
                                <GoHeartFill className="feye"/>
                                24
                            </p>        
                        </div>
                    </div>
                    <div className="news-item">
                        <div className="down-main-news">
                            <h4>Китайская Хакерская Группировка Storm-0558: Атака на Госдепартамент США и Ключевые Результаты Расследования</h4>
                            <p>Расследование атаки китайской хакерской группировки Storm-0558 на Госдепартамент США: узнайте, как компрометация учетных записей Outlook и похищение ключа подписи MSA привели к утечке данных и как ведомство реагирует на инцидент. Подробный анализ произошедшего и меры по обеспечению кибербезопасности....</p>
                        </div>
                        <div className="down-info-news">
                            <p>
                                <FaEye  className="feye"/>
                                100
                            </p>
                            <p>
                                <GoHeartFill className="feye"/>
                                24
                            </p>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog