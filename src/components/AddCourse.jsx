import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddCourse = () => {

    const [input, changeInput] = useState({

        course_name: "",
        created_at: "",
        duration: "",
        fee: "",
        id: "",
        mode: "",
        trainer: ""

    })

    const inputHandler =(event) => {
        changeInput({...input, [event.target.name]:event.target.value})
    }

const readValue = () => {
    console.log(input)

    axios.post("https://host-demo-app.onrender.com/api/add-course", input).then(

(response) => (
    console.log(response.data)
)

    ).catch(
        (error) => (
            console.error("Error Adding Course", error)
        )
    )

    }

    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Course Name</label>
                                <input type="text" value={input.course_name} name='course_name' onChange={inputHandler} className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" name='duration' value={input.duration} onChange={inputHandler} className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Fee (in Rupees)</label>
                                <input type="number" name="fee" value={input.fee} id="" onChange={inputHandler} className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mode</label>
                                <select name="" id="" className="form-control" name="mode" onChange={inputHandler} value={input.mode}>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Trainer</label>
                                <input type="text" name="trainer" value={input.trainer} id="" onChange={inputHandler} className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCourse