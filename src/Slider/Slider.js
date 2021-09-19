import React, { useState } from 'react'
import MultipleEmailInput from './MultipleEmailInput'
import './Slider.css'
import SliderEmail from './SliderEmail'
import SliderMeeting from './SliderMeeting'
import SliderReminder from './SliderReminder'
function Slider(props) {

    const [isEmailSelected, setEmailSelected] = useState(false)
    const [isMeetingSelected, setMeetingSelected] = useState(false)
    const [isReminderSelected, setReminderSelected] = useState(false)

    const handleSelected = (i) => {
        switch (i) {
            case 1:
                setEmailSelected(true);
                setMeetingSelected(false)
                setReminderSelected(false);
                break;

            case 2:
                setEmailSelected(false);
                setMeetingSelected(true)
                setReminderSelected(false);
                break;

            case 3:
                setEmailSelected(false);
                setMeetingSelected(false)
                setReminderSelected(true);
                break;
        }
    }

    const sliderclosehandler = () => {
        props.setIsSliderOn(false)
    }
    return (
        <div className={props.isSliderOn ? 'slider bg-dark slider__active' : 'slider bg-dark'}>
            <div className="slider__close">
                <i class="fas fa-window-close" onClick={sliderclosehandler}></i>
            </div>
            <h2>Select Action</h2>
            <div className="slider__actions">
                <div onClick={() => handleSelected(1)} className={isEmailSelected && 'slider__action__active'}>
                    <i class="fas fa-envelope"></i>
                    <h5>Send Email</h5>
                </div>
                <div onClick={() => handleSelected(2)} className={isMeetingSelected && 'slider__action__active'}>
                    <i class="fab fa-skype"></i>
                    <h5>Send Meeting Invitation</h5>
                </div>
                <div onClick={() => handleSelected(3)} className={isReminderSelected && 'slider__action__active'}>
                    <i class="fas fa-bell"></i>
                    <h5>Send Reminder</h5>
                </div>
            </div>
            {isEmailSelected && <SliderEmail setElements={props.setElements} elements={props.elements} isEmailSelected={isEmailSelected}></SliderEmail>}
            {isMeetingSelected && <SliderMeeting setElements={props.setElements} elements={props.elements} isMeetingSelected={isMeetingSelected}></SliderMeeting>}
            {isReminderSelected && <SliderReminder setElements={props.setElements} elements={props.elements} isReminderSelected={isReminderSelected}></SliderReminder>}
        </div>
    )
}

export default Slider
