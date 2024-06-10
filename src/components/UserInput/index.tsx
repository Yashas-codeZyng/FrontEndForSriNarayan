import React, { useRef } from 'react';
import { UserInputStyledTextField, UserInputContainerStyledBox } from './style.ts';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addMsg } from '../../Redux/slice/msgSlice.ts';
import { RootState, AppDispatch } from '../../Redux/store.ts';

const UserInput = () => {
    const userInputRef = useRef();
    const dispatch: AppDispatch = useDispatch();
    const msgs = useSelector((state: RootState) => state.msg.msg);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleIconButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && userInputRef.current) {
            e.preventDefault();
            const userInput: string = userInputRef.current.value;
            // console.log(userInput);
            if (userInput.trim()) {
                dispatch(addMsg({ user: "user", message: userInput }));
                userInputRef.current.value = "";
                const url = "";
                const payload = { "email_text": userInput };
                fetch(url, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ payload })
                }).then((res) => { return res.json() })
                    .then((data) => dispatch(addMsg({ user: "bot", message: data })))
            }
        }
    };
    //;
    return <UserInputContainerStyledBox>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} accept=".txt" />
        <IconButton sx={{ marginBottom: "5px" }} onClick={handleIconButtonClick}>
            <AttachFileIcon sx={{ color: "white" }} />
        </IconButton>
        <UserInputStyledTextField
            variant='standard'
            size='medium'
            placeholder="Type something..."
            multiline
            rows={1.2}
            InputProps={{ style: { color: 'white' }, inputRef: userInputRef }}
            onKeyDown={handleKeyDown}
        />
    </UserInputContainerStyledBox>
};

export default UserInput;
