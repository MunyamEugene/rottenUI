import RatedServiceName from './ratedServiceName';
export const RatedServices = ({services=[]})=>{
    return(
            <div className='voted-services'>
                {services.map((vote)=>{
                return(
                    <div  key={vote.id} className='service'>
                        <RatedServiceName service={vote.service}/>
                        <p>{`(${vote.votes})`}</p>
                    </div>
                )
            })}</div>
        
    );
}

export default RatedServices;
