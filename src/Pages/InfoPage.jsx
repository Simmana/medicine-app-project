import hospital from "../assets/images/hosp.jpg";

function InfoPage(){
    return(
        <section class="body">
            <div class="category">
                <div class="category-text">
                    Общая информация Городской больницы №35
                </div>
            </div>
            <div class="info-image">
                <div class="container-image">
                    <img src={hospital} class="hospital-image" alt="hospital" />
                </div>
            </div>
            <div class="info-text">
                <div class="container-text">
                    <b>Городская больница №35 в 2023 году стало рекодрдсменом среди всех лечебных учереждений Алматы в области принятых и полнстью вылеченных пациентов. За 2023 год великие врачи городско больницы №35 приняли и помогли в излечение недугов 102365 людям</b>
                </div>
            </div>
        </section>
    );
}

export default InfoPage;