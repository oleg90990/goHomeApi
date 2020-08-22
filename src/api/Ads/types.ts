import { Social, Gender, YesNo } from '../../enum'
import { ICityItem } from '../Dictionaries/types'

export interface AgeState {
  from: number
  to: number
}

export interface IItem {
    id: number,
    title: string,
    images: string[],
    thumbnail: string,
    content: string,
    age: number,
    colors: number[],
    animal_id: number,
    breed_id: number,
    active: boolean,
    user_id: number,
    gender: Gender,
    sterilization: YesNo
    city?: ICityItem,
    city_id?: number,
    vkPosts: number[]
    phone: string
}

export interface IStateSearchBody {
  animal?: number;
  ages: AgeState;
  colors: number[];
  breeds: number[];
  gender: Gender,
  sterilization: YesNo,
  city?: ICityItem
}

export interface IPostCreatedBody extends Omit<IItem, 'id' | 'user_id' | 'active' | 'vkPosts' | 'thumbnail'> {
    socials: Social[]
}

export interface IPostUpdateBody extends Omit<IItem, 'user_id' | 'active' | 'vkPosts' | 'thumbnail'> {
    socials: Social[]
}

export type IFindBody = {
    items: IItem[],
    lastPage: number,
    currentPage: number
}