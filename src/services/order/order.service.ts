//"use server"
// https://www.youtube.com/watch?v=ouqcQunk0fU

import { instance } from 'app/api.interceptor';
import { IOrder, IOrderPayPal } from 'types/order.interface';


const ORDER = 'orders'


export const OrderService = {

    async orderService() {
        return instance<IOrder[]>({
            url: ORDER,
			method: 'GET',
		})
	},

   async orderPaypal (data:IOrderPayPal ){
    return instance<{id:string,status:string}>({
        url: `${ORDER}/create`,
        method:"POST",
        data: data
    })

    

   },

}
  

