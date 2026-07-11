import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourses = () => {
    const [cdata, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://192.168.33.245:5001/api/courses").then(
            (response) => (
                changeData(response.data)
            )
        ).catch()
    }

    useEffect(
        () => (
            fetchData()
        ), []
    )
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered align-middle text-center">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Course Name</th>
                                                <th>Duration</th>
                                                <th>Fee</th>
                                                <th>Mode</th>
                                                <th>Trainer</th>
                                                <th>Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cdata.map(
                                                (value, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.course_name}</th>
                                                            <th>{value.duration}</th>
                                                            <th>{value.fee}</th>
                                                            <th>{value.mode}</th>
                                                            <th>{value.trainer}</th>
                                                            <th>{value.created_at}</th>
                                                        </tr>
                                                    )
                                                }
                                            )}




                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourses