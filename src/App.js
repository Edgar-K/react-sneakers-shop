import Cart from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr =[
  {
    
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
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App;
