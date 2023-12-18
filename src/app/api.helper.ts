// Передаю данные в json формате
export const getContentType = () => ({
'Content-Type':'application/json'
});
// Обрабатываю ошибку
export const errorCatch = (error: any): string => {
    const message = error?.response?.data?.message

    return message
    ? typeof error.response.data.message == 'object'
    ? message[0]
    : message
    : error.message 
};