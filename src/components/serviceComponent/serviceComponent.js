import React from "react";

export const ServiceComponent = ({state})=>{
    const {badservices}=state;
    return(
        <ul>
            {badservices.map((service)=> <li key={service.id}>{service.name}</li>)}
        </ul>
    )
}