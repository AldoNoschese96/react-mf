import {selector} from "recoil";
import {counterAtom} from "../../atoms";
import { hasCounterMaximumValueHandler, hasCounterMinimumValueHandler } from "./fn";

export const hasCounterMinimumValue = selector({
    key: 'hasCounterMinimumValue',
    get: ({get}) => {
        const counter = get(counterAtom);
        return hasCounterMinimumValueHandler(counter);;
    },
});

export const hasCounterMaximumValue = selector({
    key: 'hasCounterMaximumValue',
    get: ({get}) => {
        const counter = get(counterAtom);
        return hasCounterMaximumValueHandler(counter);;
    }
});