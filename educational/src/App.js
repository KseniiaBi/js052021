import './App.css';

let cakes = [
  {
    img: 'https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-delicious-chocolate-cake-with-premium-frosting-2-kg--135598-m.jpg',
    name: 'Cheesecake',
    price: 19.90
  },
  {
    img: 'https://www.hummingbirdhigh.com/wp-content/uploads/2020/05/01_Rainbow-Unicorn-Cake_IMG_0008.jpg',
    name: 'Bisquit',
    price: 9.90
  },
  {
    img: 'https://i0.wp.com/bestcakedesign.com/wp-content/uploads/chocolate-cake-design-11.png',
    name: 'Red velvet',
    price: 29.90
  },
  {
    img: 'https://cafedelites.com/wp-content/uploads/2020/02/Chocolate-Cake-IMAGE-99.jpg',
    name: 'Prague',
    price: 14.90
  }
];

function App() {
  return (
    <div className="App">
     {
      cakes.map((cake, index) => <Cake key={index} img={cake.img} name={cake.name} price={cake.price} />)
     }
    </div>
  );
}

function Cake(props){
  return(
      <div className="cake">
        <img src={props.img} alt={props.name} />
        <h4>{props.name}</h4>
        <h2>${props.price}</h2>
      </div>
    );
}


export default App;