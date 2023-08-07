export interface singupModel{
    email: string,
    username: string,
    name: string,
    role: string,
    password: string
}
export interface AuthResData{
    user_id?: string,
    email: string,
    role?: string,
    name?: string,
    username?: string,
    token?: string
}
export interface loginModel{
    email: string,
    password: string
}
export class User{
    constructor(
        public id: string,
        public email: string,
        public username: string,
        public name: string,
        public role: string,
        public token: string
    ){}
    
}
