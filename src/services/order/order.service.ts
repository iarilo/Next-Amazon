import { instance } from "app/api.interceptor";
import { IOrder } from "types/order.interface";

const ORDER = 'order'

export const OrderService = {
async orderService(){
    return instance<IOrder[]>({
        url: ORDER,
        method: 'GET'
    });
 }

}