import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';

import SubHeader from '@/components/SubHeader';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import CartItem from '@/components/CartItem';

import { LocalStorage } from '@/utils/storage';
import { transformData } from '@/utils/cart/transformData';

import { STORAGE_KEYS } from '@/constants/storage';

import { CartProductItem, CartStorage } from '@/types/cart';

import { getProductsByIds } from '@/services/product';

import { updateLocalStorageCart } from '@/utils/cart/updateLocalStorageCart';

const CartPage: FC = () => {
  const [cart, setCart] = useState<CartProductItem[]>([]);

  const [productIdConsiderDelete, setProductIdConsiderDelete] = useState<
    number | null
  >(null);

  const breadCrumbItems = useMemo(() => [{ label: 'Cart' }], []);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0,
    );
  }, [cart]);

  const handleQuantityChange = useCallback(
    (value: number, id: number) => {
      const updatedCart = cart.map((item) => {
        if (item.productId === id) {
          return { ...item, quantity: value };
        }
        return item;
      });

      updateLocalStorageCart(updatedCart);
      setCart(updatedCart);
    },
    [setCart, cart],
  );

  const handleDeleteCartItem = useCallback((id: number) => {
    setProductIdConsiderDelete(id);
  }, []);

  const handleOnCancelPopup = useCallback(() => {
    setProductIdConsiderDelete(null);
  }, []);

  const handleOnOkPopup = useCallback(() => {
    if (productIdConsiderDelete) {
      const updatedCart = cart.filter(
        (item) => item.productId !== productIdConsiderDelete,
      );

      updateLocalStorageCart(updatedCart);
      setCart(updatedCart);
      setProductIdConsiderDelete(null);
    }
  }, [productIdConsiderDelete, cart]);

  const renderCheckout = useMemo(() => {
    return (
      <div className='py-10 px-6 w-1/3 bg-quinary text-md'>
        <p className='mb-2 font-secondary-bold'>Coupon Code</p>
        <Input placeholder='Enter your coupon code' />

        <div className='text-right'>
          <Button className='mt-4'>Check</Button>
        </div>

        <div className='mt-9 pb-6 flex justify-between border-b-2 border-dashed border-tertiary'>
          <div>
            <p className='mb-2 font-secondary-bold'>Subtotal</p>
            <p className='text-tertiary'>{cart.length} Product</p>
          </div>
          <p className='font-secondary-regular'>$ {totalPrice} USD</p>
        </div>

        <div className='my-6 flex justify-between'>
          <p className='mb-2 font-secondary-bold'>Total</p>
          <p className='font-secondary-regular'>$ {totalPrice} USD</p>
        </div>

        <div className='text-right'>
          <Button>Checkout</Button>
        </div>
      </div>
    );
  }, [cart.length, totalPrice]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartStorages =
          (LocalStorage.load(STORAGE_KEYS.CART) as CartStorage[]) ?? [];

        const productIds = cartStorages.map((cartStorage) =>
          String(cartStorage.productId),
        );

        const quantities = cartStorages.map(
          (cartStorage) => cartStorage.quantity,
        );
        const data = await getProductsByIds(productIds);

        setCart(transformData(data, quantities));
        // eslint-disable-next-line no-empty
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <main>
        <Head>
          <title>Cart | Checkout</title>
        </Head>
        <SubHeader
          title='Cart'
          breadcrumbItems={breadCrumbItems}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
        />
        <div className='container py-20'>
          <h2 className='mb-10 text-3xl font-secondary-bold leading-6'>
            Cart Product
          </h2>

          <div className='flex gap-10'>
            <div className='flex flex-col gap-6 w-2/3 font-secondary-bold text-secondary text-xl'>
              {cart.map(
                ({ productId, name, price, stock, quantity, thumbnail }) => (
                  <CartItem
                    key={productId}
                    productId={productId}
                    name={name}
                    price={price}
                    stock={stock}
                    quantity={quantity}
                    imgHref={thumbnail}
                    onQuantityChange={handleQuantityChange}
                    onDeleteCartItem={handleDeleteCartItem}
                  />
                ),
              )}
            </div>
            {renderCheckout}
          </div>
        </div>
      </main>
      <Modal
        isOpen={!!productIdConsiderDelete}
        onCancel={handleOnCancelPopup}
        onOk={handleOnOkPopup}
        isConfirmModal
      >
        <p className='text-md font-primary-bold'>
          Are you sure you want to delete this product?
        </p>
      </Modal>
    </>
  );
};

export default CartPage;
