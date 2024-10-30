import React from 'react';
import PayPalProvider from 'app/PayPalProvider';


const Order = () => {
	return (
		<div>
			<h5 style={{color:'#ffffff',  margin:'0',padding:'0'} } > Order</h5>
            <PayPalProvider/>
		</div>
	)
}

export default Order
