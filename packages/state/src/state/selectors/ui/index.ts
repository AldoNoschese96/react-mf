import {selector} from "recoil";
import {uiAtom} from "../../atoms";
export const isMenuOpened = selector({
    key: 'uiSelector',
    get: ({get}) => {
        const ui = get(uiAtom);
        return isMenuOpened(ui);
    },
});