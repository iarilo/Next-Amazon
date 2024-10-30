import paypal from '@edribeiro/checkout-server-sdk'
import { NextResponse } from 'next/server'
import { PayPalService } from 'services/paypal/paypal.service'

export async function POST() {
	const clientOrder = await PayPalService.connectionSettingsPayPal()
	//const orderPaypal = await OrderService.orderPaypal()
	//console.log('clientOrder = ',clientOrder)
	
	// OrdersCreateRequest  Создаёт заказ на покупку
	const request = new paypal.orders.OrdersCreateRequest()
	
	request.requestBody({
		// intent - фиксированный  заказ
		intent: 'CAPTURE',
		// purchase_units - Детали покупки
		purchase_units: [
			{
				// amount - В какой  валюте
				amount: {
					currency_code: 'USD',
					value: '100.00',
					// breakdown -  общая сумма
					breakdown: {
						item_total: {
							currency_code: 'USD',
							value: '100.00',
						},
					},
				},
				items: [
					{
						name: 'React',
						description: 'Учебник по React',
						quantity: '1',
						// 	unit_amount - стоимость
						unit_amount: {
							currency_code: 'USD',
							value: '50.00',
						},
					},
					{
						name: 'Next',
						description: 'Учебник по Next',
						quantity: '1',
						// 	unit_amount - стоимость
						unit_amount: {
							currency_code: 'USD',
							value: '50.00',
						},
					},
				],
			},
		],
	})

	const response = await clientOrder.execute(request)

	//console.log('response=',response)
	/*  
   Response = {
  statusCode: 201,
  headers: {  'content-type': 'application/json',  'content-length': '501',  connection: 'keep-alive',  date: 'Wed, 23 Oct 2024 17:15:24 GMT' },
  result: {  id: '48G850879Y300611S',  status: 'CREATED', links: [ [Object], [Object], [Object], [Object]    }
}
   */
	return NextResponse.json({ id: response.result.id, status: '200' })
}
