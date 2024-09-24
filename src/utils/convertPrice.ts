export const convertPrice = (price: number)=> {
return price.toLocaleString('en-Us',{
    style:'currency',
    currency:'USD'
})
}