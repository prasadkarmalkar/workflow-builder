import React, { useState } from 'react'
import MultipleEmailInput from './MultipleEmailInput'










function SliderMeeting(props) {
    const [data, setData] = useState({
        email: [],
        url: "",
        date: "",
        time: "",
        type: "Meeting"
    });
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // {
        //     id: '1',
        //     type: 'special',
        //     data: { type: 'Email', subject: "This is subject", date: "20/20/21", time: "22:11" },
        //     position: { x: 250, y: 25 },
        //   }

        var newid = 1;
        var y = 30
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
                url: "",
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
        <div className="slider__meeting">
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
                    <label for="url">Url</label>
                    <input type="text" onChange={handleChange} class="form-control form-control-sm" id="url" placeholder="Enter Meeting Url" />
                </div>
                <div class="form-group">
                    <label>When to execute?</label>
                    <div className="d-flex">
                        <input type="date" onChange={handleChange} class="form-control form-control-sm" id="date" placeholder="Enter Date" />
                        <input type="time" onChange={handleChange} class="form-control form-control-sm" id="time" placeholder="Enter Time" />
                    </div>
                </div>
                <button type="submit" class=" mt-3 btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SliderMeeting
