function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2 className="mb-30 d-flex justify-between  ">Cart
                    <img onClick={props.onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove" width={25} height={25} />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center  justify-between mb-20">
                        <div style={{ backgroundImage: 'url("/img/sneakers/1-sneaker.jpeg")' }} className="cartItemImg" > </div>
                        <div className="mr-20">
                            <p className="mb-5">Nike Running</p>
                            <b>€ 87,00</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" width={25} height={25} />
                    </div>

                    <div className="cartItem d-flex align-center  justify-between mb-20">
                        <div style={{ backgroundImage: 'url("/img/sneakers/1-sneaker.jpeg")' }} className="cartItemImg" > </div>
                        <div className="mr-20">
                            <p className="mb-5">Nike Running</p>
                            <b>€ 87,00</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" width={25} height={25} />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul >
                        <li className="d-flex">
                            <span>Total:</span>
                            <div></div>
                            <b>150 EUR</b>
                        </li>
                        <li className="d-flex">
                            <span>Tax 19%:</span>
                            <div></div>
                            <b>29 EUR</b>
                        </li>
                    </ul>
                    <button className="greenButton">Order
                        <img width={20} height={20} src="/img/arrow-right.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Drawer;