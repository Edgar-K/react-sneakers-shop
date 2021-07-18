import Cart from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear" >

      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>
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

          <Cart />

          {/* <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/2-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike Running</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 123,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/3-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike 90's</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 95,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite" >
              <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>
            <img src="/img/sneakers/4-sneaker.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Nike Sport</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price</span>
                <b>€ 163,00</b>
              </div>
              <button className="button">
                <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
              </button>
            </div>
          </div>
           */}
        </div>
      </div>
    </div>
  )
}

export default App;
