import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


class App extends Component {
  constructor(props){
   super(props); 
   this.state = {
    cart: {
      items: [],
      total: 0
    },
    cakes: [
      {
        'img': 'https://www.nicepng.com/png/detail/255-2556817_elegant-images-of-birthday-cakes-png-cake-png.png',
        'price': 19,
        'name': 'Sponge Cake'
      },
      {
        'img': 'https://toppng.com/uploads/preview/birthday-cake-png-11546508047ge7qulhxmc.png',
        'price': 29,
        'name': 'Cheesecake'
      },
      {
        'img': 'https://toppng.com/uploads/preview/happy-birthday-cake-png-png-transparent-birthday-cakes-11562879324inogs2uf8a.png',
        'price': 24,
        'name': 'Red Velvet'
      }
    ]
   };

   this.buyCake = this.buyCake.bind(this);
  }

  buyCake(n){
    let cartCopy = this.state.cart.items.slice();
    let cakes = this.state.cakes.slice();
    let cartTotal = this.state.cart.total;
    let wasAlreadyInCart = false;

    cartCopy.forEach( inCart => {
      if(inCart.name === n){
        wasAlreadyInCart = true;
        inCart.count +=1;
        cartTotal += inCart.price;
      }
    });

    if(!wasAlreadyInCart){
      let bought = {};
      cakes.forEach(cake => {
        if(cake.name === n){
          bought = {
            img: cake.img,
            name: cake.name,
            price: cake.price,
            count: 1
          }

          cartCopy.push(bought);
          cartTotal += cake.price;
        }
      });
    }

    this.setState({
      cakes: cakes,
      cart: {
        items: cartCopy,
        total: cartTotal
      }
    });
  }

  render(){
    return(
     <Router>
      <div className="app">
        <header>
          <ul className="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>

            <span className="cartInfo">{this.state.cart.items.length} goods, ${this.state.cart.total}</span>
          </header>

          

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/catalog">
                <Catalog clicked={this.buyCake} cakes={this.state.cakes} />
              </Route>
              <Route path="/cart">
                <Cart cart={this.state.cart} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

        <footer>&copy; JS Course 05.2021</footer>
      </div>
    </Router>
    );
  }
}

function Catalog(props){
  return(
    <div className="content shop">
      <h1>Shop</h1>
      {
        props.cakes.map((item,index) => <Cake key={index} click={props.clicked} src={item.img} name={item.name} price={item.price} />)
      }
    </div>
   );
}

function Cake(props){
  return(
    <div className="cake" data-id={props.name}>
      <img src={props.src} alt="cake" loading="lazy" />
      <h4>{props.name}</h4>
      <h2>{props.price}</h2>

      <button onClick={() => props.click(props.name)}>Buy</button>
    </div>
  );
}

function Cart(props){
   return (
    <div className="content cart">
     <h1>Cart</h1>
     {
      props.cart.items.length > 0 ?

        props.cart.items.map((item, index) => <CartItem key={index} data={item} />)

        : null

     }
     <div className="cartTotal">{props.cart.total}USD</div>
    </div>
    );
}

function CartItem(props){
  return(
    <div className="cartItem">
      <img src={props.data.img} alt="cake" />
      <h5>{props.data.name}</h5>
      <span className="count">{props.data.count}</span>
      <span className="price">${props.data.price}, </span>
      <span className="totalSum">${props.data.count * props.data.price}</span>

    </div>
    );
}

function Home() {
  return (
    <div className="content home">
     <h1>Home</h1>
    </div>
    );
}

export default App;