import './messenger.css'
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import {AuthContext} from "../../contex/AuthContex";
import {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";


export default function Messenger(){
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const {user} = useContext(AuthContext)
    const scrollRef = useRef()
    useEffect(() => {
        const getConversations = async () => {
            try{
                const res = await axios.get('/conversations/' + user._id)
                setConversations(res.data)
            } catch (e){
                console.log(e)
            }

        }
        getConversations()
    }, [user._id])


    useEffect(() => {
        const getMessage = async () => {
            try{
                const res = await axios.get('/message/' + currentChat?._id)
                setMessages(res.data)
            } catch (e){
                console.log(e)
            }
        }
        getMessage()
    }, [currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }
        try{
            const res = await axios.post('/message', message)
            setMessages([...messages, res.data])
        } catch (e){
            console.log(e)
        }
        setNewMessage('')
    }


    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])


    return (
        <>
            <Topbar/>
            <div className='messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className="chatMenuInput"/>
                        {conversations.map((c) => (
                            <div key={c._id} onClick={() => setCurrentChat(c)}>
                                <Conversation key={c._id} conversation={c} currentUser={user}/>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ?
                            (<>
                                <div className="chatBoxTop">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message key={m._id} message={m} own={m.sender === user._id}/>
                                        </div>
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea placeholder='write something...' className='chatMessageInput'
                                              onChange={(e) => setNewMessage(e.currentTarget.value)}
                                              value={newMessage}
                                    > </textarea>
                                    <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                                </div>
                            </>) : (<span className='noConversationText'>Open a conversation to start a chat...</span>)}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>

    )
}