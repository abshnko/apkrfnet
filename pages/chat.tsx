import React from 'react'
import MainLayout from '../components/MainLayout'
import MainContainer from '../components/MainContainer/MainContainer'
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs'
import {Chat as ChatComponent} from '../components/Chat/Chat'

const Chat = () => {
    return (
        <MainLayout title="Чат Эй,пей! | АПКРФ.НЕТ">
            <MainContainer>
                <Breadcrumbs crumbs={['Чат Эй, пей!']} links={['/chat']} />
                <ChatComponent/>
            </MainContainer>
        </MainLayout>
    )
}

export default Chat