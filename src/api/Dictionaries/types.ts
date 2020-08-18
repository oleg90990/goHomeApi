import { Gender } from '../../enum'

export interface IDictionaryItem {
    id: number,
    name: string,
    img: string
}

export interface IDictionaryColorItem {
    id: number,
    name: string,
    value: string
}

export interface IDictionaryAnimalType {
    breeds: IDictionaryItem[],
    id: number,
    name: string,
    img: string
    [Gender.male]: string,
    [Gender.female]: string,
    [Gender.none]: string,
}

export interface ICityItem {
    id: number,
    name: string,
    parent_id: number | null
}

export interface IStateDictionaries {
    animals: IDictionaryAnimalType[],
    colors: IDictionaryColorItem[]
}