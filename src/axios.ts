import axios, { AxiosInstance } from 'axios'
import { Mode } from './enum'
import { Token, ICallbackError } from './types'

import Dictionaries from './api/Dictionaries'
import User from './api/User'
import Ads from './api/Ads'
import Vk from './api/Vk'

export default class Axios {
  private axiosBase: AxiosInstance 

  constructor(mode: Mode = Mode.dev, token: Token, callbackError?: ICallbackError) {
    this.axiosBase = this.init(mode, token, callbackError)
  }

  public getBseURL(mode: Mode): string {
    switch (mode) {
      case Mode.prod:
        return 'https://api.friendshome.ru/v1/'
      case Mode.dev:
        return 'http://127.0.0.1:8000/v1/'
    }

    return ''
  }

  public init(mode: Mode, token: Token, callbackError?: ICallbackError) {
    const axiosBase = axios.create({
      baseURL: this.getBseURL(mode)
    })

    axiosBase.interceptors.request.use(
      async config => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        return config
      },
      error => {
        return Promise.reject(error)
      },
    )

    axiosBase.interceptors.response.use(
      config => {
        return config
      },
      error => {
        const { data, status } = error.response

        if (status === 401) {
          return Promise.reject(error)
        }

        if (data.errors && callbackError) {
          const messages: string = Object.keys(data.errors)
            .map(key => data.errors[key])
            .join('\n')

          callbackError(messages)
        } else if (data.message && callbackError) {
          callbackError(data.message)
        }

        return Promise.reject(error)
      },
    )

    return axiosBase
  }

  public getDictionariesApi() {
    return new Dictionaries(this.axiosBase)
  }

  public getUserApi() {
    return new User(this.axiosBase)
  }

  public getAdsApi() {
    return new Ads(this.axiosBase)
  }

  public getVkApi() {
    return new Vk(this.axiosBase)
  }
}