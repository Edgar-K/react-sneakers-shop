import styles from './Card.module.scss'

function Cart(props) {


    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite} >
                <img src="/img/heart-unliked.svg" alt="unliked" width={15} height={15}   />
            </div>

            <img src={props.imageUrl} alt="Sneakers" width={170} height={112} />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price</span>
                    <b>€ {props.price}</b>
                </div>
                <button className="button" onClick={props.onPlus} >
                    <img src="/img/btn-plus.svg" alt="plus" width={20} height={20} />
                </button>
            </div>
        </div>
    );
}

export default Cart;