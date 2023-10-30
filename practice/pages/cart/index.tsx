import { FC, useCallback, useMemo, useState } from 'react';

import SubHeader from '@/components/SubHeader';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import CartItem from '@/components/CartItem';

const CartPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadCrumbItems = useMemo(() => [{ label: 'Cart' }], []);

  const handleQuantityChange = useCallback(() => {
    // TODO: Handle quantity change
  }, []);

  const handleDeleteCartItem = useCallback(() => {
    setIsModalOpen(true);
    // TODO: Handle delete cart item
  }, []);

  const handleOnCancelPopup = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOnOkPopup = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
            <p className='text-tertiary'>4 Product</p>
          </div>
          <p className='font-secondary-regular'>$ 160 USD</p>
        </div>

        <div className='my-6 flex justify-between'>
          <p className='mb-2 font-secondary-bold'>Total</p>
          <p className='font-secondary-regular'>$ 160 USD</p>
        </div>

        <div className='text-right'>
          <Button>Checkout</Button>
        </div>
      </div>
    );
  }, []);

  return (
    <>
      <main>
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
              <CartItem
                productId={1}
                name='Smart T-Shirt'
                price={40}
                stock={1305}
                quantity={2}
                onQuantityChange={handleQuantityChange}
                onDeleteCartItem={handleDeleteCartItem}
              />
            </div>
            {renderCheckout}
          </div>
        </div>
      </main>
      <Modal
        isOpen={isModalOpen}
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
