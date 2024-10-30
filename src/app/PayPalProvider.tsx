'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useMutation } from '@tanstack/react-query'
import { useActionsRedux, useCart } from 'store/hooks-reduxer/hooks-redux'
import { OrderService } from 'services/order/order.service'
import { IOrderPayPal } from 'types/order.interface'

const PayPalProvider = () => {
	const { items } = useCart()
	const { reset } = useActionsRedux()

	async function orderMutate(orderData: IOrderPayPal) {
		const order = await OrderService.orderPaypal(orderData)
		return order
	}

	const mutateon = useMutation({
		mutationKey: ['order'],
		mutationFn: (orderData: IOrderPayPal) => orderMutate(orderData),
		onSuccess({ data }) {
			const {id} = data
			reset()
			console.log('Data useMutation orderID =',id)
		},
		onError: error => {
			console.error('Ошибка создания order в useMutation', error)
		},
	})


	const clientId = process.env.NEXT_PUBLIC_CLIENT_ID!

	return (
		<div>
			<h5 style={{ color: '#ffffff', margin: '0', padding: '0' }}>
				PayPalProvider
			</h5>

						<PayPalScriptProvider options={{ clientId: clientId }}>
				<PayPalButtons
					style={{
						layout: 'horizontal',
						label: 'buynow', //  color:'blue',
					}}
				
					createOrder={async () => {
						const orderData: IOrderPayPal = {
							items: items.map(ell => ({
								price: ell.prise,
								productId: ell.product.id,
								quantity: ell.quantity,
							})),
						}
						try {
							const response = await mutateon.mutateAsync(orderData)
							return response.data.id
						} catch (error) {
							console.error(
								'Ошибка создания PayPal order в handleCreateOrder :',
								error,
							)
							throw new Error('Не удалось создать order в handleCreateOrder')
						}
					}}
					// Ответ от paypal о том что оплата прошла
					// onApprove={(data,actions)=>{
					//   console.log('Data onApprove=',data.orderID)
					//   actions.order?.capture()
					// }}

					//Отмена заказа
					onCancel={data => {
						console.log('Data onCancel =', data)
					}}
				/>
			</PayPalScriptProvider>
		</div>
	)
}

export default PayPalProvider

/* 
             className=''
                createOrder={()=>{}} // создаёт заказ на покупку
				onCancel={()=>{}}   // отмена заказа
				onApprove={()=> {}} // подтверждение  оплаты   
*/
