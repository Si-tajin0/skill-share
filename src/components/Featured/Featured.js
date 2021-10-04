import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const Featured = () => {
    // state declare
    const [featuredCourse, setFeaturedCourse] = useState([]);

    // data load
    useEffect(() => {
        fetch('./featured.json')
            .then(res => res.json())
            .then(data => setFeaturedCourse(data))
    }, [])
    return (
        <div className="container">
            <h1 style={{ fontSize: '60px', marginTop: '10px' }}>Featured</h1>
            <div className="row">
                {/* data map */}
                {
                    featuredCourse.map(feature => <FeaturedCard
                        key={feature.id}
                        feature={feature}

                    ></FeaturedCard>)
                }
            </div>
            <div className="text-center">
                <Link to='/services'>
                    <button className="about-btn my-5">View All Course</button>
                </Link>
            </div>

        </div>
    );
};

export default Featured;