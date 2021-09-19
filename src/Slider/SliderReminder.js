import React, { useState } from 'react'

function SliderReminder(props) {
    const [data, setData] = useState({
        email: [],
        reminder: "",
        date: "",
        time: "",
        type: "Reminder"
    });
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data)
        props.setElements(((els) => {
            console.log(els);
            return [
                ...els,
                {
                    id: Math.random(),
                    position: { x: 250, y: 100 },
                    data: data,
                    type: 'special'
                }
            ];
        }))
        setData(
            {
                email: [],
                reminder: "",
                date: "",
                time: "",
                type: "Email"
            }
        )
    }

    const [localEmail, setLocalEmail] = useState('');
    // Setting Multiple Email Address In Array
    const multipleEmailFormHandler = (e) => {
        e.preventDefault();
        console.log(data)
        setData({
            ...data,
            email: [...data.email, localEmail]
        })
    }

    return (
        <div className="slider__reminder">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <div className="multiple__email">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <div className="multiple__email__input">
                            <input type="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} className="form-control form-control-sm" aria-describedby="emailHelp" placeholder="Enter email" />
                            <button onClick={multipleEmailFormHandler} className="btn btn-primary"><i class="far fa-plus-square"></i></button>
                        </div>

                        <ul className="">
                            {data.email ? data.email.map((e) => {
                                return (
                                    <li>{e}</li>
                                )
                            }) : ''}
                        </ul>
                    </div >
                </div>
                <div class="form-group">
                    <label for="reminder__text">Reminder Text</label>
                    <input type="text" value={data.url} onChange={handleChange} class="form-control form-control-sm" id="reminder" placeholder="Enter Reminder Text" />
                </div>
                <div class="form-group">
                    <label>When to execute?</label>
                    <div className="d-flex">
                        <input type="date" value={data.date} onChange={handleChange} class="form-control form-control-sm" id="date" placeholder="Enter Date" />
                        <input type="time"value={data.time} onChange={handleChange} class="form-control form-control-sm" id="time" placeholder="Enter Time" />
                    </div>
                </div>
                <button type="submit" class=" mt-3 btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SliderReminder
