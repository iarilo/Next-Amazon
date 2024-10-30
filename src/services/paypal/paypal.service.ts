import paypal from '@edribeiro/checkout-server-sdk';

export const PayPalService =  {

    async  connectionSettingsPayPal() {
        // Указываю параметры подключения
        const clientId =  process.env.NEXT_PUBLIC_CLIENT_ID 
        const clientSecret = process.env.NEXT_PUBLIC_Secret_Key_1 
        
        // Создаю среду  разработки в  песочницы
        const environment =  new paypal.core.SandboxEnvironment(clientId, clientSecret)
        // PayPalHttpClient: предназначен для отправки заказов
        const client =   new paypal.core.PayPalHttpClient(environment)
        
        //  Создаю рабочую  среду  разработки
        // SandboxEnvironment  какое приложение  подключается и настраивается в рабочей среде
        const workingУnvironment = new paypal.core.LiveEnvironment(
            clientId,
            clientSecret,
        )
        // PayPalHttpClient: предназначен для отправки заказов
        const workingСlient = new paypal.core.PayPalHttpClient(environment)
      
        return  client
    }
}
   //export type PayPalClients = ReturnType<typeof connectionSettingsPayPal>