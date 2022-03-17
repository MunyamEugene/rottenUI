import actionNames from '../../src/redux/actions/actionTypes';
import {hotels,badservices,popupModel,userInfo,ratedService} from '../../src/redux/reducers/reducers'
describe('hotels reducer',()=>{
    it("fetch hotels",()=>{
        const state=[];
        const action ={
        type:actionNames.SUCCESS_HOTELS,
        hotels:[{id:1,name:"selena",stars:4,location:"kigali"}]
    }
    
    const result = hotels(state,action);
    expect(result).toEqual([{id:1,name:"selena",stars:4,location:"kigali"}])
    })
})

describe('bad services reducer',()=>{
    it('fetcht complaints',()=>{
        let state=[];
        let action={
            type:actionNames.SUCCESS_SERVICES,
            services:[{id:1,name:"bad food"}]
        }
        let result=badservices(state,action);
        expect(result).toEqual([{id:1,name:"bad food"}])
    })
})

describe('user information',()=>{
     it('authenticate user',()=>{
        let state={};
        let action={
            type:actionNames.SUCCESS_AUTH,
            user:{name:'eugene',email:'eug@yahoo.com'}
        }
        let result=userInfo(state,action);
        expect(result).toEqual({name:'eugene',email:'eug@yahoo.com'})
    })
})


describe('rated copmplaints',()=>{
     it('rate bad service',()=>{
        const state=[];
        const action={
            type:actionNames.RATE,
            service:{id:1,name:'bad food'}
        }
        expect(ratedService(state,action)).toEqual([{id:1,name:'bad food'}])
    });
    it('cansel rating',()=>{
        let state=[];
        let canseled={id:1,name:'bad food'};
        let action={
            type:actionNames.CANSEL_VOTE,
            canseled:canseled
        }
        expect(ratedService(state,action)).toEqual([])
    })
})

describe('popup',()=>{
    it('open',()=>{
        let state={popup:false}
        let action={
            type:actionNames.POPUP,
            popup:true
        }
        expect(popupModel(state,action)).toEqual({})
    })
})

