import Cart from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Nike Sportswear',
    price: 59.99,
    imageUrl: '/img/sneakers/1.jpg'
  },
  {
    title: 'FLEX EXPERIENCE RUN 10',
    price: 55.99,
    imageUrl: '/img/sneakers/2.jpg'
  },
  {
    title: 'Air Max Bella Tr 3',
    price: 89.99,
    imageUrl: '/img/sneakers/3.jpg'
  },
  {
    title: 'KD TREY 5 IX',
    price: 99,
    imageUrl: '/img/sneakers/4.jpg'
  }
]

function App() {
  return (
    <div className="wrapper clear" >
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Cart title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default App;
