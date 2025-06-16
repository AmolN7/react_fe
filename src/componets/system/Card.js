const Card = ({ image, title, description, link }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={image} className="card-img-top p-3" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
export default Card;