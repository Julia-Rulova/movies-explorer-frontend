import "./NavTab.css";

function NavTab() {
    return (
        <section className="nav-tab">
            <a href="#about-project" className="nav-tab__link">
                О проекте
            </a>
            <a href="#techs" className="nav-tab__link">
                Технологии
            </a>
            <a href="#about-me" className="nav-tab__link">
                Студент
            </a>
        </section>
    );
}

export default NavTab;
