
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

const configuration = {
    environment: 'test', // Change to 'live' for the live environment.
    clientKey: 'test_QHX34GTOIVCLBDROKNMO73SHBA6KSSF5', // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
    analytics: {
      enabled: true // Set to false to not send analytics data to Adyen.
    },
    session: {
      id: 'CSD9CAC3...', // Unique identifier for the payment session.
      sessionData: 'Ab02b4c...' // The payment session data.
    },
    onPaymentCompleted: (result, component) => {
        console.info(result, component);
    },
    onError: (error, component) => {
        console.error(error.name, error.message, error.stack, component);
    },
    // Any payment method specific configuration. Find the configuration specific to each payment method:  https://docs.adyen.com/payment-methods
    // For example, this is 3D Secure configuration for cards:
    paymentMethodsConfiguration: {
      card: {
        hasHolderName: true,
        holderNameRequired: true,
        billingAddressRequired: true
      }
    }
  };

  const session ={    
    "amount":{       
        "currency":"EUR",       
        "value":500    
     },    
    "countryCode":"NL",   
    "expiresAt":"2021-08-24T13:35:16+02:00",         
    "id":"CSD9CAC34EBAE225DD",     
    "merchantAccount":"YOUR_MERCHANT_ACCOUNT",       
    "reference":"YOUR_PAYMENT_REFERENCE",   
    "returnUrl":"YOUR_RETURN_URL",    
    "sessionData":"Ab02b4c..." 
}

async function startCheckout() {
const checkout = await AdyenCheckout({   
    clientKey: configurations.clientKey,   
    environment: configurations.environment,   
    session,   
    onPaymentCompleted: (result, component) =>   {               
        console.info(result, component);
    },   
    onError: (error, component) =>   {     
        console.error(error.name, error.message, error.stack, component);   
    } 
});
}
startCheckout();
    
const dropin = checkout.create('dropin').mount('#dropin-container');

const checkout = new AdyenCheckout(configuration);

const integration = checkout.create("dropin").mount(docment.getElementById("dropin"));