import React from "react";
import Search from "./messages/search";
import MessageUser from "./messages/messageUser";

const Chat = () => {
    return (
        <>
            <div className="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
                <div className="d-flex flex-column h-100 position-relative">
                    <div className="hide-scrollbar">

                        <div className="container py-8">
                            {/* Title */}
                            <div className="mb-8">
                                <h2 className="fw-bold m-0">Chats</h2>
                            </div>

                            {/* Search */}
                            <Search/>

                            {/* Chats */}
                            <div className="card-list">
                                {/* Card */}
                                <MessageUser />
                                {/* Card */}
                            </div>
                            {/* Chats */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;