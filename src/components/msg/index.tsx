import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { MessageContainerStyledBox } from "./style.ts"

const Msg = () => {
    const msgs = useSelector((state: RootState) => state.msg.msg);
    console.log(msgs);

    return <> {msgs.map((msg, index) => (
        <MessageContainerStyledBox sx={msg.user === "user" ? { color: "white" } : { color: "red" }} key={index}>{msg.message}</MessageContainerStyledBox>
    ))}</>

};

export default Msg;
