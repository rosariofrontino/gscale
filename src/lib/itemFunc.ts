import { IItem } from "./data/contracts/IItem";
import { IItemGroup } from "./data/contracts/IItemGroup";
import { ItemWithAmount } from "./data/entities/ItemWithAmount";
import { Items } from "./data/Items";
import getItemFromGroup from "./getItemFromGroup";
import { tryGetItemWithAmount } from "./tryGetItemWithAmount";

export const single = (item?: IItem) => {
  return (amount: number): ItemWithAmount => {
    if (!item) return null;
    return { item, amount };
  };
};

export const grouped = (group?: IItemGroup) => {
  return (amount: number, rarity: number) => {
    if (!group) return null;
    return tryGetItemWithAmount(getItemFromGroup(group, rarity), amount);
  };
};

export function mora(amount: number): ItemWithAmount {
  return { item: Items.mora, amount };
}