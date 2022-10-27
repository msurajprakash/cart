import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id: 3
            }
        ]

    }
}
handleIncreaseQuantity = (product) =>{
    console.log('Hey inc the qty of', product)
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
}

handleDecreaseQuantity = (product) =>{
    console.log('Hey inc the qty of', product)
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products: products
    })
}

handleDeleteProduct = (id) =>{
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id)//it will return new array

    this.setState({
        products: items
    })
}

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;

  products.forEach((product) =>{
    count += product.qty;
  })
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal = 0;

  // eslint-disable-next-line
  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price
  })
  return cartTotal;
}

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;