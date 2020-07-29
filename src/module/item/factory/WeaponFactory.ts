import BaseItemFactory from './BaseItemFactory';
import { IPreCreateItemData, ItemFactoryData } from './AbstractItemFactory';
import { ISR5WeaponDataContainer } from '../SR5Weapon';
import { ItemType } from '../types/ItemType';

export default class WeaponFactory extends BaseItemFactory {
    create(data: IPreCreateItemData): ItemFactoryData<ISR5WeaponDataContainer> {
        return {
            ...super.create(data),
            type: ItemType.Weapon,
        };
    }
}