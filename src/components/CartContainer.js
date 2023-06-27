import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const CartContainer = () => {
	const { cartItems, total, amount } = useSelector((store) => store.cart);

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>Your cart:</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section class="cart">
			<header>
				<h2>Your Cart</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button className="btn clear-btn">clear cart</button>
			</footer>
		</section>
	);
};
export default CartContainer;
