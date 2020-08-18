import { AxiosInstance, AxiosResponse } from 'axios'
import { IUserUpdateData, IUser, IStateUserResponse } from './types'

export default class User {
    private axiosInstance: AxiosInstance

    constructor(axios: AxiosInstance) {
        this.axiosInstance = axios
    }

    public async login(mobile: string, password: string): Promise<AxiosResponse<IStateUserResponse>> {
        return this.axiosInstance.post('user/login', {
            mobile, password
        })
    }

    public async register(data: IUserUpdateData): Promise<AxiosResponse<IStateUserResponse>> {
        return this.axiosInstance.post('user/register', data)
    }

    public async update(data: IUserUpdateData): Promise<AxiosResponse<IUser>> {
        return this.axiosInstance.post('user/update', data)
    }

    public async me(): Promise<AxiosResponse<IUser>> {
        return this.axiosInstance.get('user/me')
    }
}