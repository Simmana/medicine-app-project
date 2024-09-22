import main_button from "../assets/images/Main-button.svg";
import { Link } from "react-router-dom";

function Header({ quotesLatin, quotesRussian }) {
    const nummer =  Math.round(Math.random() * (3 - 0) + 0);
    return(
        <header class="header">
            <div class="container">
                <Link to="/" class="button">
                    <img src={main_button} alt="main-button" />
                </Link>
                <div class="up-phrase">
                    {quotesLatin}
                </div>
                <div class="down-phrase">
                    {quotesRussian}
                </div>
            </div>
        </header>
    );
}
export default Header;