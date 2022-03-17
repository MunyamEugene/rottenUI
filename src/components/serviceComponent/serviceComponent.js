import React from "react";

const ServiceComponent = ({state})=>{
    const {badservices}=state;
    return(
        <ul>
            {badservices.map((service)=> <li key={service.id}>{service.name}</li>)}
        </ul>
    )
}

export default ServiceComponent;
