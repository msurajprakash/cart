import React from 'react';

class CartItem extends React.Component {
    render () {
        console.log('this.props', this.props)
        const { price, title, qty} = this.props.product;

        return (
            <div className='cart-item'>
                {this.props.jsx}
                <div className='left-block'>
                    <img style={styles.image} alt='product'/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Price Rs. {price}</div>
                    <div style={ {color: '#777'} }>Qty {qty}</div>
                    <div className='cart-item-actions'>
                        {/* buttons */}
                        <img 
                          alt='increase' 
                          className='action-icons' 
                          src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                          onClick={ ()=> this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                          alt='decrease' 
                          className='action-icons' 
                          src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                          onClick={this.decreaseQuantity}
                        />
                        <img 
                          alt='delete' 
                          className='action-icons' 
                          src='https://cdn-icons-png.flaticon.com/512/484/484662.png'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// this is internal css
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;