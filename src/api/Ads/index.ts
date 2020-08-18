import { AxiosInstance, AxiosResponse } from 'axios'
import { Sortby } from '../../enum'
import {
    IItem,
    IPostCreatedBody,
    IPostUpdateBody,
    IStateSearchForm,
    IFindBody
} from './types'

export default class Ads {
    private axiosInstance: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axiosInstance = axios
    }

    public async create(params: IPostCreatedBody): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post('ads/store', params);
    }

    public async update(params: IPostUpdateBody): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post('ads/update', params);
    }
    
    public async find(params: IStateSearchForm, sortBy: Sortby, page: number): Promise<AxiosResponse<IFindBody>> {
        return this.axiosInstance.post('ads/find', { ...params, sortBy, page });
    }

    public async me(): Promise<AxiosResponse<IItem[]>> {
        return this.axiosInstance.get('ads/me');
    }

    public async publish(id: number, active: boolean): Promise<AxiosResponse<IItem>> {
        return this.axiosInstance.post(`ads/publish`, {
            active,
            id
        });
    }
}