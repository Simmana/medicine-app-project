function Finance(){
    return(
        <section class="body">
            <div class="category">
                <div class="category-text">
                    Ваши финансы
                </div>
            </div>
            <div class="info">
                <div class="container">
                    <p class="finance-title">Ваш оклад в этом месяце :</p>
                    <b class="finance-number">300 000 тенге</b>
                </div>
            </div>
            <div class="interface">
                <div class="container-title">
                    Калькулятор оклада работника за месяц
                </div>
                <div class="calculator">
                    <div class="calculator-container">
                        <div class="payment">
                            Изначальный оклад
                        </div>
                        <div class="first">400 000 тенге</div><br />
                    </div>
                    <div class="calculator-container">
                        <div class="illness">
                            Кол-во дней болезни
                        </div>
                        <div class="second">5 дней</div><br />
                    </div>
                    <div class="calculator-container">
                        <div class="hurry">
                            Кол-во опозданий
                        </div>
                        <div class="third">10 раз</div><br />
                    </div>
                </div>
                <div class="container-finance-text">
                    <p class="finance-text">Ваш работа важна для нас!</p>
                    <p class="finance-text">Админстрация :</p>
                    <p class="finance-text">+77776666666</p>
                </div>
            </div>
        </section>
    );
}

export default Finance;