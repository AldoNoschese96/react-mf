import React from 'react'
import {RecoilRoot} from "recoil";
import StandaloneWrapper from "@presentation/container/StandaloneWrapper";

const App = () => {
    return (
        <RecoilRoot>
            <StandaloneWrapper />
        </RecoilRoot>
    )
}

export default App
