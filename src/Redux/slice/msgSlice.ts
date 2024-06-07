import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
    user: string;
    message: string;
}

interface MsgState {
    msg: Message[];
}

const initialState: MsgState = {
    msg: [],
};

const msgSlice = createSlice({
    name: 'msg',
    initialState,
    reducers: {
        setMsg: (state, action: PayloadAction<Message[]>) => {
            state.msg = action.payload;
        },
        addMsg: (state, action: PayloadAction<Message>) => {
            state.msg.push(action.payload);
        },
    },
});

export const { setMsg, addMsg } = msgSlice.actions;
export default msgSlice.reducer;
