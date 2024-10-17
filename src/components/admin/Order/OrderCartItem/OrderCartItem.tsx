import { CartItem } from '../../../../types/common';
import classes from './OrderCartItem.module.css';

interface IOrderCartItemProps {
  name: CartItem['name'];
  quantity: CartItem['quantity'];
  price: CartItem['price'];
  discount: CartItem['discount'];
  discountedPrice: CartItem['discountedPrice'];
  totalPrice: CartItem['totalPrice'];
  idx: number;
}

const OrderCartItem: React.FC<IOrderCartItemProps> = ({
  name,
  quantity,
  price,
  discount,
  discountedPrice,
  totalPrice,
  idx,
}) => {
  return (
    <tr className={classes.row}>
      <td>{idx}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span>{discountedPrice ? discountedPrice : price}тг</span>
        {discountedPrice && (
          <span
            style={{
              fontSize: '12px',
              color: 'red',
            }}
          >
            База {price} тг, скидка -{discount}%
          </span>
        )}
      </td>
      <td className={classes['cell']}>{totalPrice} тг</td>
    </tr>
  );
};

export default OrderCartItem;
