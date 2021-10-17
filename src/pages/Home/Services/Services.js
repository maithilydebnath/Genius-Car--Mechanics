import React, { useEffect, useState } from 'react';
import firstService from '../../../images/services/1.jpg';
import Service from '../Service/Service';
import './Services.css'

const services = [
    { name: 'Replace Tire', price: 2000, time: 2, img: 'firstService' }
]
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Our services</h2>
            <div id="services" className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;