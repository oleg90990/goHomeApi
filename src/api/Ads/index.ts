import { AxiosInstance, AxiosResponse } from 'axios'
import { Sortby } from '../../enum'
import {
    IItem,
    IPostCreatedBody,
    IPostUpdateBody,
    IStateSearchBody,
    IFindBody
} from './types'

export default class Ads {
    private axiosInstance: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axiosInstance = axios
    }

    public async create(params: IPostCreatedBody): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post('posts/store', params);
    }

    public async update(params: IPostUpdateBody): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post('posts/update', params);
    }
    
    public async find(params: IStateSearchBody, sortBy: Sortby, page: number): Promise<AxiosResponse<IFindBody>> {
        return this.axiosInstance.post('posts/find', { ...params, sortBy, page });
    }

    public async me(): Promise<AxiosResponse<IItem[]>> {
        return this.axiosInstance.get('posts/me');
    }

    public async publish(id: number, active: boolean): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post(`posts/publish`, {
            active,
            id
        });
    }
}