import React from 'react';

class CartItem extends React.Component {
    

    // testing(){
    //     const promise = new Promise((resolve, reject) =>{
    //         setTimeout(() =>{
    //             resolve('done');
    //         }, 5000);
    //     })

        // promise.then(() =>{
            //setState func acts like synchronus call
            // this.setState({qty: this.state.qty + 10});

            // this.setState({qty: this.state.qty + 10});
            
            // this.setState({qty: this.state.qty + 10});

            // console.log('state', this.state);
        // });
    // }
    //or we can use arrow func here to bind
    increaseQuantity = () => {
        //this.state.qty += 1; this will only increase qty in background and not be shown in browser
        // console.log('this', this.state)

        //setState func call the re-rendered components
        //setState form1
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {});
        //OR
        //setState form 2 - if prevState is required, use this
        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        }, ()=>{
            console.log('this', this.state)
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty === 0){
            return;
        }

        this.setState((prevState)=>{
            return{
                qty: prevState.qty - 1
            }
        });
    }
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
                          onClick={this.increaseQuantity}
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