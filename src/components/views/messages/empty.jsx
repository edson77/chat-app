import React from 'react';
import EmptySvg from './emptySvg'
const EmptyMessage = () => {
    return (
        <>
            <div  className="chat-body hide-scrollbar flex-1 h-100">
                <div  className="chat-body-inner h-100" style={{ paddingBottom: '87px' }}>

                    <div  className="d-flex flex-column h-100 justify-content-center">
                        <div  className="text-center mb-6">
                            <span  className="icon icon-xl text-muted">
                                <EmptySvg/>
                            </span>
                        </div>

                        <p  className="text-center text-muted">No messages yet, <br/> start the conversation!</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EmptyMessage;