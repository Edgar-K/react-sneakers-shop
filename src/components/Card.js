function Cart() {
    return (
        <div className="card">
            <div className="favorite" >
                <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15} />
            </div>

            <img src="/img/sneakers/1-sneaker.jpeg" alt="Sneakers" width={133} height={112} />
            <h5>Fila Jual Sepatu</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price</span>
                    <b>€ 87,00</b>
                </div>
                <button className="button">
                    <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
                </button>
            </div>
        </div>
    );
}

export default Cart;