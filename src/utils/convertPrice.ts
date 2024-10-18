export const convertPrice = (price: number) => {
    return price.toLocaleString('ro-MD', {
        style: 'currency',
        currency: 'MDL'
    });
}


// export const convertPrice = (price: number) => {
//     return price.toLocaleString('ru-RU', {
//         style: 'currency',
//         currency: 'RUB'
//     });
// }



// export const convertPrice = (price: number)=> {
// return price.toLocaleString('en-Us',{
//     style:'currency',
//     currency:'USD'
// })
// }