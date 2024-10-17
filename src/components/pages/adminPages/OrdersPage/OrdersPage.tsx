import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../store/store';
import { deleteOrder } from '../../../../store/CommonSlice'; 
import Actions from '../../../layouts/adminLayouts/Actions/Actions';
import Content from '../../../layouts/adminLayouts/Content/Content';
import Order from '../../../admin/Order/Order';
import Card from '../../../UI/Card/Card';
import Loader from '../../../UI/Loader/Loader';
import Placeholder from '../../../UI/Placeholder/Placeholder';
import { NO_ORDERS } from '../../../../constants/messages';

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(); 
};

const OrdersPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, isLoading } = useSelector((state: RootState) => state.common);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayOrders = orders.filter(order => {
    const orderDate = new Date(order.timestamp);
    orderDate.setHours(0, 0, 0, 0); 
    return orderDate.getTime() === today.getTime();
  });
  const handleDeleteOrder = (id: string) => {
    dispatch(deleteOrder(id)); 
  };
  return (
    <>
      <Actions title={'Заказы'} />
      <Content>
        <>
          {isLoading && <Loader />}
          {!isLoading && (
            <Card fullWidth>
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Дата и время</th>
                      <th>Покупатель</th>
                      <th>Телефон</th>
                      <th>Адрес</th>
                      <th>Сумма</th>
                      <th>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todayOrders.length === 0 && (
                      <tr>
                        <td colSpan={6}>
                          <Placeholder text={NO_ORDERS} />
                        </td>
                      </tr>
                    )}
                    {todayOrders.map(({ user, totalPrice, totalWeight, totalDiscount, cart, id, timestamp }) => (
                      <tr key={id}>
                        <td>{formatDate(timestamp)}</td> {/* Отображаем реальное время заказа */}
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>{totalPrice}</td>
                        <td>
                          <button onClick={() => handleDeleteOrder(id)}>Удалить</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            </Card>
          )}
        </>
      </Content>
    </>
  );
};

export default OrdersPage;
