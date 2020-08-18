import { ICityItem } from '../Dictionaries/types';
export interface IUserUpdateData {
    mobile?: string;
    email?: string;
    name: string;
    password?: string;
    c_password?: string;
    city_id: number;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    city: ICityItem;
    mobile: string;
    vk: boolean;
    vkGroups: number[];
}
export interface IStateUserResponse {
    access_token: string;
    user: IUser;
}
