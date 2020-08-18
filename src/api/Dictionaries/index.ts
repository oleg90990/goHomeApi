import { AxiosInstance, AxiosResponse } from 'axios'
import { ICityItem, IStateDictionaries } from './types'

export default class Dictionaries {
    private axiosInstance: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axiosInstance = axios
    }

    public async loadDictionaries(): Promise<AxiosResponse<IStateDictionaries>> {
       return this.axiosInstance.get('dictionaries')
    }

    public async findCity(q: string, regions: boolean): Promise<AxiosResponse<ICityItem[]>> {
       return this.axiosInstance.post('dictionaries/city', { q, regions })
    }
}