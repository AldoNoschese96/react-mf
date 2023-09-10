import React from 'react';
import {Button} from "@mui/material";
import {useRecoilValue, useSetRecoilState} from "recoil";

import { counterAtom } from "state/Atoms";
import { hasCounterMinimumValue, hasCounterMaximumValue } from 'state/Selectors'

const Header = React.lazy(() => import('header/Header'));
const Footer = React.lazy(() => import('footer/Footer'));

const Home = () => {
    const setCounterState = useSetRecoilState<number>(counterAtom);
    const canCounterBeDecremented = useRecoilValue<boolean>(hasCounterMinimumValue);
    const canCounterBeIncremented = useRecoilValue<boolean>(hasCounterMaximumValue);

    const onIncrement = () => {
        if(canCounterBeIncremented) return;
        setCounterState(prevState => (prevState + 1))
    };
    const onDecrement = () => {
        if(canCounterBeDecremented) return;
        setCounterState(prevState => (prevState - 1));
    }

    return (
        <>
            <Header />
                <Button onClick={onIncrement}>Increment</Button>
                <Button onClick={onDecrement}>Decrement</Button>
            <Footer />
        </>
    );
};

export default Home;