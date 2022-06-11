
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../../servies/user.service';
import HeaderChat from './header'
import FooterChat from './footer'
import EmptyMessage from './empty';

const DirectChat = () => {
    let { id } = useParams();
    const [data, setDate] = useState([])
    const [receivedImage, setReceivedImage] = useState('')
    const [senderImage, setSenderImage] = useState('')
    const userId = id
    useEffect(() => {
        UserService.getUser(userId).then(
            (response) => {
                setReceivedImage(response.data.data[0]['image_url'])
            },
            (error) => {
                console.log('error')
            }
        );
        UserService.getAuthUser().then(
            (response) => {
                setSenderImage(response.data.data[0]['image_url'])
            },
            (error) => {
                console.log('error')
            }
        );
        const interval = setInterval(() => {
            UserService.getUserMessage(id).then(
                (response) => {
                    setDate(response.data.data)
                    console.log(response.data.data)
                },
                (error) => {
                    console.log('error')
                }
            );
        }, 1000);

        return () => clearInterval(interval);


    }, [])
    setInterval(
        UserService.getUser(userId).then(
            (response) => {
                setReceivedImage(response.data.data[0]['image_url'])
            },
            (error) => {
                console.log('error')
            }
        ),
        1000)
    return (
        <>
            <main className="main is-visible" data-dropzone-area="">
                <div className="container h-100">
                    <div className="d-flex flex-column h-100 position-relative">
                        {/* Chat: Header */}
                        <HeaderChat userId={id} key={id} />
                        {/* Chat: Header */}

                        {/* Chat: Content */}
                        {data.length === 0 ? <EmptyMessage /> : ''}
                        <div className="chat-body hide-scrollbar flex-1 h-100">
                            <div className="chat-body-inner" style={{ paddingBottom: "87px" }}>
                                <div className="py-6 py-lg-12">
                                    {data.map(function (message, i) {
                                        return (
                                            <>

                                                {/* Message */}
                                                <div className={userId == message.sender ? 'message' : 'message message-out'}>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                                                        <img className="avatar-img" src={userId == message.sender ? receivedImage : senderImage} alt="" />
                                                    </a>

                                                    <div className="message-inner">
                                                        <div className="message-body">
                                                            <div className="message-content">
                                                                <div className="message-text">
                                                                    <p>{message.content}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="message-footer">
                                                            <span className="extra-small text-muted">{message.created_at}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className={userId == message.sender ? 'message' : 'message message-out'}>
                                                    <ReceiveMessage message={message} />
                                                </div> */}

                                                {/* Divider */}
                                                {/* <div className="message-divider">
                                                    <small className="text-muted">Monday, Sep 16</small>
                                                </div> */}


                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>


                        {/* Chat: Content */}

                        {/* Chat: Footer */}
                        <FooterChat userId={userId} />
                        {/* Chat: Footer */}
                    </div>

                </div>
            </main>
        </>
    )
}

export default DirectChat;