import { AxiosInstance, AxiosResponse } from 'axios';
import { ICityItem, IStateDictionaries } from './types';
export default class Dictionaries {
    private axiosInstance;
    constructor(axios: AxiosInstance);
    loadDictionaries(): Promise<AxiosResponse<IStateDictionaries>>;
    findCity(q: string, regions: boolean): Promise<AxiosResponse<ICityItem[]>>;
}
