import { AxiosInstance, AxiosResponse } from 'axios';
import { Sortby } from '../../enum';
import { IItem, IPostCreatedBody, IPostUpdateBody, IStateSearchForm, IFindBody } from './types';
export default class Ads {
    private axiosInstance;
    constructor(axios: AxiosInstance);
    create(params: IPostCreatedBody): Promise<AxiosResponse<IItem>>;
    update(params: IPostUpdateBody): Promise<AxiosResponse<IItem>>;
    find(params: IStateSearchForm, sortBy: Sortby, page: number): Promise<AxiosResponse<IFindBody>>;
    me(): Promise<AxiosResponse<IItem[]>>;
    publish(id: number, active: boolean): Promise<AxiosResponse<IItem>>;
}
