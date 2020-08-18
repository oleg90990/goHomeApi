import { AxiosInstance, AxiosResponse } from 'axios'
import { VKLoginResult } from 'react-native-vkontakte-login'
import { IGroupItem } from './types'
import { IUser } from '../User/types'

export default class Vk {
    private axiosInstance: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axiosInstance = axios
    }

    public async save(data: VKLoginResult): Promise<AxiosResponse<IUser>> {
        return this.axiosInstance.post('vk/save', data);
    }

    public async groups(): Promise<AxiosResponse<IGroupItem[]>> {
        return this.axiosInstance.get('vk/groups');
    }

    public async groupsStore(groups: number[]): Promise<AxiosResponse<IUser>> {
        return this.axiosInstance.post('vk/groups/store', groups);
    }
}