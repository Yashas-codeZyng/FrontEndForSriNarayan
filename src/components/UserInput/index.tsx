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
            if (userInput.trim()) {
                dispatch(addMsg({ user: "user", message: userInput }));
                userInputRef.current.value = "";
                const payload = { email_text: userInput };  // Directly create the payload with email_text
                const url = "http://127.0.0.1:8000/summarize_email";
                fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)  // Send payload directly
                }).then(res => res.json())  // Parse JSON response
                    .then(data => {
                        dispatch(addMsg({ user: "bot", message: data.summary }));  // Access the summary from response
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        }
    };

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
