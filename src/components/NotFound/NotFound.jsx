import "./NotFound.css";

function NotFound({ onBack }) {
    return (
        <div className="not-found">
            <h2 className="not-found__code">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <button type="button" className="not-found__back" onClick={onBack}>
                Назад
            </button>
        </div>
    );
}

export default NotFound;
