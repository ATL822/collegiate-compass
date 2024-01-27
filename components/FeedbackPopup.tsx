'use client'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function FeedbackPopup(){
    return(
    <Popup trigger=
                {<button> Rate our page! </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                PLACEHOLDER
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    )
};

export default FeedbackPopup;