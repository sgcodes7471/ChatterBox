import {createContext} from 'react'
export const ChatContext=createContext({
    messages:[],
    isRoom:null,
    setCurrent:()=>{},
    current:null,
    setCurrent:()=>{},
    handleGetMsg:(id)=>{},
    handleSendMsg:(id)=>{},
    handleRoomMsg:(roomId)=>{},
    handleRoomSend:(roomId)=>{},
    handleCreateRoom:(newRoom)=>{},
    handleLeaveRoom:(roomId)=>{},
})
export const ChatContextProvider = ChatContext.Provider