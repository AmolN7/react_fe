const Card = ({ image, title, description, link, brand, model, price, fuel_type, year }) => {
    return (
        <div className="mb-4">
            <div className="card">
                <div className="row g-0 flex-column flex-md-row">
                    <div className="col-md-4">
                        <a href={link}>
                            <img
                                src={image}
                                className="img-fluid w-100 h-100 p-2"
                                style={{ borderRadius: '1rem' }}
                                alt="Card image cap"
                            />
                        </a>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{brand} | {model} | {fuel_type} | {year} </p>
                            <p className="card-text">Price: {price}</p>
                            <p className="card-text">{description}</p>
                            <a href={link} className="link">View product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;