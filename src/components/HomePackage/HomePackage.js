import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const HomePackage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://safe-garden-02022.herokuapp.com/allPackage')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='mb-5' >
            <h1 className='text-dark text-center mx-5 my-5 '>Top Tourist Places </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 m-auto">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default HomePackage;