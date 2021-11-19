import AscensionCostTable from "../data/AscensionCostTable";
import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { ITraveler } from "../data/contracts/ITraveler";
import { ItemWithAmount } from "../data/entities/ItemWithAmount";
import { getAscensionStage } from "../getAscensionStage";
import { AscensionLevel } from "../interfaces/AscensionLevel";
import mergeAmountByName from "./mergeAmountByName";

export function calculateAscension(
  character: IBaseCharacter,
  start: AscensionLevel,
  goal: AscensionLevel
): ItemWithAmount[] {
  const startAscension = getAscensionStage(start);
  const goalAscension = getAscensionStage(goal);

  // execute an anonymous function which either returns traveler
  // materials if meta is "traveler" or just return all materials from the character
  const items = (() => {
    if (character.meta === "traveler") {
      const traveler = character as ITraveler;
      return {
        gemGroup: traveler.gemGroup,
        local: traveler.local,
        commonGroup: traveler.ascensionCommonGroup,
        boss: undefined,
      };
    } else {
      return character as ICharacter;
    }
  })();

  return AscensionCostTable(items).slice(startAscension, goalAscension).reduce(mergeAmountByName, []);
}
