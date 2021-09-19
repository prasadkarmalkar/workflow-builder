import React, { useState } from 'react'
import './MultipleEmailInput.css'
function MultipleEmailInput(props) {
    const [localEmail, setLocalEmail] = useState('');
    // Setting Multiple Email Address In Array
    const multipleEmailFormHandler = (e) => {
        e.preventDefault();
        props.setEmail({ email: [...props.email.email, localEmail] })
    }
    return (
     <div></div>  
    )
}

export default MultipleEmailInput
