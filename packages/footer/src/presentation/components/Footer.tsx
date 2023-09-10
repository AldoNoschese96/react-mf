import React from 'react';

import { counterAtom} from "state/Atoms";
import { useRecoilValue } from "recoil";
const Footer = () => {
    const counter = useRecoilValue<number>(counterAtom);
    return (
        <div>
            Footer {counter}
        </div>
    );
};

export default Footer;