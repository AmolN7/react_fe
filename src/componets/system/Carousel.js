import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel(props) {
    const { items = [] } = props;

    return (
        <Carousel data-bs-theme="dark">
            {items.map((item, idx) => (
                <Carousel.Item key={idx} interval={2000}>
                    <img
                        className="d-block w-100 "
                        src={item.src}
                        alt={item.alt}
                    />
                    <Carousel.Caption>
                        <h5>{item.label}</h5>
                        <p>{item.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CustomCarousel;