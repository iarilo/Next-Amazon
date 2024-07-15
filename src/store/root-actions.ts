// Жёстко  привязываю все экспорты из actions в userActions
import * as userActions from './user/user.actions';
// ...userActions это методы  register, login, logout и checkAuth 
export const rootAcnions = {
    ...userActions
}
