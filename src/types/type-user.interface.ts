export  interface IUser {
    map(arg0: (ell: IUser) => void): string
    id: number
    name: string 
    email: string 
    avatarPath: string 
    phone: string
    password: string;
    isAdmin: boolean
}

export interface IUserData {
    name?: string 
    email: string 
    avatarPath?: string 
    phone?: string
    password?: string;
}