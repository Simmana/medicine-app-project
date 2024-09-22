import cashImage from"../assets/images/cash-stack.svg";
import newsImage from "../assets/images/newspaper.svg";
import statistics from "../assets/images/bar-chart-fill.svg";
import wikiImage from "../assets/images/Wikipedia's_W.svg.png";
import { Link } from "react-router-dom";

function MainPage(){
    return(
        <div>
            <section class="body">
                <div class="category">
                    <div class="category-text">
                        Главная страница
                    </div>
                </div>
                <div class="home-block">
                    <div class="home-block__container">
                        <div class="menu-block">
                            <Link to="/finance" class="menu-block__item">
                                <img src={cashImage} class="menu-block-images" alt="cash-stack" />
                                <span>Финансы</span>
                            </Link>
                            <Link to="/news" class="menu-block__item">
                                <img src={newsImage} class="menu-block-images" alt="newspaper" />
                                <span>Новости</span>
                            </Link>
                        </div>
                        <div class="menu-block">
                            <Link to="/info" class="menu-block__item">
                                <img src={statistics} class="menu-block-images" alt="statistics" />
                                <span>Ведомость</span>
                            </Link>
                            <a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer" class="menu-block__item">
                                <img src={wikiImage} class="menu-block-images" alt="wikipedia" />
                                <span>Wikipedia</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;