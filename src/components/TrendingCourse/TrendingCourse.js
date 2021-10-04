import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Course from '../Course/Course';

const TrendingCourse = () => {
    // state declare
    const [courses, setCourses] = useState([]);
    const [filteredSource, setFilteredSource] = useState([])

    // data load
    useEffect(() => {
        fetch('./output.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                setFilteredSource(data)
            });
    }, [])

    // selectar handeller
    const [catagoryValue, setCatagoryValue] = useState('general')
    const handleSelect = (e) => {
        setCatagoryValue(e.target.value)

        let s = courses.filter(c => c.category === e.target.value)

        setFilteredSource(s);

    }
    return (
        <div>
            <div className="container w-100">
                <h1 className="my-4 text-center">
                    All the sources from where you are getting the Course ...
                </h1>
                <div style={{ color: '#a51c30', fontWeight: "bold" }} className='p-2 text-center'> Filter by category </div>
                <div className="my-4">

                    <Form.Select
                        onChange={handleSelect}
                        value={catagoryValue}
                    >
                        <option>Open this select menu</option>
                        <option defaultValue="PROGRAMMING">PROGRAMMING</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Computer Science">Computer Science</option>
                    </Form.Select>
                </div>
                <div className="container">
                    <div className="row">
                        {/* data map */}
                        {
                            filteredSource.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourse;