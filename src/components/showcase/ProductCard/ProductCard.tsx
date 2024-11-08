import { generatePath, Link } from 'react-router-dom';
import { Product } from '../../../types/common';
import Chip from '../../UI/Chip/Chip';
import IconButton from '../../UI/IconButton/IconButton';
import FavoriteIcon from '../../UI/icons/FavoriteIcon/FavoriteIcon';
import classes from './ProductCard.module.css';

interface IProductCardProps {
  name: Product['name'];
  price: Product['price'];
  image: Product['image'];
  discount?: Product['discount'];
  brand: Product['brand'];
  category: Product['category'];
  onWishlistClick: () => void;
  isAddedToWishlist: boolean;
  id: Product['id'];
}

const ProductCard: React.FC<IProductCardProps> = ({
  name,
  price,
  image,
  discount,
  brand,
  category,
  isAddedToWishlist,
  id,
  onWishlistClick,
}) => {
  // Проверка, что у категории есть URL
  const productPath = category?.url 
    ? generatePath('/:url/:id', { url: category.url, id }) 
    : '#';  // Если URL отсутствует, ставим заглушку

  // Проверка на наличие изображения
  const defaultImage = 'https://example.com/default-image.png';
  const imageUrl = image && /^(http|https):\/\/[^ "]+$/.test(image) ? image : defaultImage;

  return (
    <li className={classes['product-card']}>
      <Link to={productPath} className={classes['image-wrapper']}>
        <img src={imageUrl} alt={name} className={classes.image} />

        <div className={classes['wishlist-btn']}>
          <IconButton onClick={onWishlistClick}>
            <FavoriteIcon filled={isAddedToWishlist} />
          </IconButton>
        </div>

        {discount && discount.percent && (
          <div className={classes['discount-chip']}>
            <Chip text={`-${discount.percent}%`} mode={'attention'} />
          </div>
        )}
      </Link>

      {discount ? (
        <span className={classes.price}>
          <span className={classes.price}>{discount.discountedPrice} тг</span>
          <span className={classes['old-price']}>{price} тг</span>
        </span>
      ) : (
        <span className={classes.price}>{price} тг</span>
      )}

      <Link to={productPath} className={classes.title}>
        {name}
      </Link>

      <div className={classes['chips-wrapper']}>
        <Chip text={brand.name} mode={'highlighted'} />
        <Chip text={category.name} mode={'highlighted'} />
      </div>
    </li>
  );
};

export default ProductCard;
