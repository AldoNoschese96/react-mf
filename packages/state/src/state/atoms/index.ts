import {atom} from 'recoil';

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0,
});

export const uiAtom = atom({
    key: 'uiAtom',
    default: {
        menu: {
            isOpen: false,
            data:{}
        },
    }
})


