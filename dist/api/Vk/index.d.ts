import { AxiosInstance, AxiosResponse } from 'axios';
import { VKLoginResult } from 'react-native-vkontakte-login';
import { IGroupItem } from './types';
import { IUser } from '../User/types';
export default class Vk {
    private axiosInstance;
    constructor(axios: AxiosInstance);
    save(data: VKLoginResult): Promise<AxiosResponse<IUser>>;
    groups(): Promise<AxiosResponse<IGroupItem[]>>;
    groupsStore(groups: number[]): Promise<AxiosResponse<IUser>>;
}
