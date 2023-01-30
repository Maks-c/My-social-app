import './conversation.css'
import {useEffect, useState} from "react";
import axios from "axios";


export default function Conversation({conversation, currentUser}){
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try{
                const res = await axios("/users?userId=" + friendId)
                setUser(res.data)
                setIsLoading(true)

            } catch (e){
                console.log(e)
            }
        }
        getUser()
    }, [currentUser, conversation])

    const showImg = () => {
        if(isLoading) {
            return user.profilePicture
        }
    }

    return (
        <div className='conversation'>
            <img src={isLoading ? PF + showImg() : PF + '/person/noAvatar.png'} alt=""
                 className="conversationImg"/>
            <span className="conversationText">{isLoading ? user.username : <p>Loading...</p>}</span>
        </div>
    )
}