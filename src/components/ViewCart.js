import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function ViewCart({ carts, onRemoveFromCart, onClearCart }) {
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setItemCount(carts.length);
        setTotalPrice(carts.reduce((total, product) => total + product.price, 0));
    }, [carts]);

    function displayProductList() {
        if (itemCount === 0) {
            return(<p>Add item/s first</p>);
        } else {
            return(
                <div>
                    {carts.map(product => (
                        <div key={product.id}>
                            <span>{product.name} {product.price.toFixed(2)}</span>
                            <button 
                                onClick={() => onRemoveFromCart(product)}>
                                    Remove
                            </button>
                        </div>
                    ))}
                    <p>No. of Item/s {itemCount}</p>
                    <p>Total Price {totalPrice.toFixed(2)}</p>
                    <Link to={'/product-pages'} >
                        <button 
                            onClick={() => onClearCart()}>
                                Checkout
                        </button>
                    </Link>
                </div>
            );
        }
    }

    return(
        <div>
            <h2>Product List</h2>
            {displayProductList()}
        </div>
    );
}

export default ViewCart;
