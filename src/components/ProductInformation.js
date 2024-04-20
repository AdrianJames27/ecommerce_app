function ProductInformation(props) {
    return (
        <div>
            <h2>Product Name: {props.name}</h2>
            <p>ID: {props.id}</p>
            <p>Price: {props.price.toFixed(2)}</p>
            <p>Description: {props.description}</p>
            <button 
                onClick={() => {
                    props.onAddToCart(props.id, props.name, props.price)
                }}>
                    Add To Cart
            </button>
        </div>
    );
}

export default ProductInformation;
