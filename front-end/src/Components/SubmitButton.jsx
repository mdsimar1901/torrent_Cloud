import React from 'react'
import '../Styles/submit.css'
const SubmitButton = () => {
    return (
        <div>
            <form>
                <input type = 'text' placeholder='Enter your magnet link here ' className='submit-box'>
                

                </input>

                <button className='submit-button'>
                    Load Torrent
                </button>
            </form>
        </div>
    )
}

export default SubmitButton;
