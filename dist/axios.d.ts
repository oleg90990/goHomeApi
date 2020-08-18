import { AxiosInstance } from 'axios';
import { Mode } from './enum';
import { Token, ICallbackError } from './types';
import Dictionaries from './api/Dictionaries';
import User from './api/User';
import Ads from './api/Ads';
import Vk from './api/Vk';
export default class Axios {
    private axiosBase;
    constructor(mode: Mode, token: Token, callbackError?: ICallbackError);
    getBseURL(mode: Mode): string;
    init(mode: Mode, token: Token, callbackError?: ICallbackError): AxiosInstance;
    getDictionariesApi(): Dictionaries;
    getUserApi(): User;
    getAdsApi(): Ads;
    getVkApi(): Vk;
}
