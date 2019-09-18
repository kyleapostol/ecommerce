import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component{
    render(){
        return (
            <div>
                <div onClick={ () => this.props.setView('catalog', {}) }>
                    {`< Back to Catalog`}
                </div>
                <h1>My Cart</h1>
                <div>                    
                    {this.props.cartItems.map( cartObj => {
                        return (
                            <CartSummaryItem
                                key = { cartObj.id }
                                cartItem = { cartObj }
                            />
                        )
                    })}
                </div>
                <div className="d-flex justify-content-around">
                item Total $0.00
                    <button type="button" 
                        className="btn btn-success"
                        onClick= {() => this.props.setView("checkout", {} )}>Checkout</button>
                </div>
            </div>  
        )
    }
}