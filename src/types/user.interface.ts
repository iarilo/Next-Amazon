export  interface IUser {
    id: number
    name: string 
    email: string 
    avatarPath: string 
    phone: string
    password: string;
}

export interface IUserData {
    name?: string 
    email: string 
    avatarPath?: string 
    phone?: string
    password?: string;
}