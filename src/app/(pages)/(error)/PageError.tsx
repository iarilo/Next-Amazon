
import FormloginAuth from '../(Admin)/(Form)/formloginAuth'

const PageError = () => {
return(
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
>
    <h3 style={{ color: 'red' }}>
        Зарегистрируйтесь или укажите данные для логирования{' '}
    </h3>
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
        }}
    >
        <FormloginAuth variant={'orange'} props={'orange'} />
    </div>
</div>
)
}

export default PageError