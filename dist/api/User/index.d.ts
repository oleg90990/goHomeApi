import { AxiosInstance, AxiosResponse } from 'axios';
import { IUserUpdateData, IUser, IStateUserResponse } from './types';
export default class User {
    private axiosInstance;
    constructor(axios: AxiosInstance);
    login(mobile: string, password: string): Promise<AxiosResponse<IStateUserResponse>>;
    register(data: IUserUpdateData): Promise<AxiosResponse<IStateUserResponse>>;
    update(data: IUserUpdateData): Promise<AxiosResponse<IUser>>;
    me(): Promise<AxiosResponse<IUser>>;
}
