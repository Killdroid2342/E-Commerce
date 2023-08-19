import PaymentForm from '../components/PaymentForm';
import ShippingForm from '../components/Checkout/ShippingForm';

const Payment = () => {
  return (
    <div className='otherBGColor'>
      <ShippingForm />
      <PaymentForm />
    </div>
  );
};

export default Payment;
