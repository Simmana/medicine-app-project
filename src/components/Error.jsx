import { Link } from "react-router-dom";
function Error(){
    return(
        <div class="error">
            <div class="container">
                <h3 class="error-title">Ошибочка!</h3>
                <p class="error-description">Проверьте подключение к интернету. Возможно сервер временно не доступен</p>
                <Link to="/" class="white-btn">Обновить</Link>
            </div>
        </div>
    );
}

export default Error;