import { ADD_TICKET, COMPLETE_TICKET, CANCEL_TICKET, CALC_PRICE } from "../../../Utils/StringConst";
import {random, now} from 'lodash';
import {calculatePrice} from "../../../Utils/calculate-price";

const addTicketReducer = (initial = {}, action) => {

    switch (action.type) {

        case ADD_TICKET: {
            const id = random(1000);
            return {...initial, [id] : {...action.payLoad, id}} 
        }
        case COMPLETE_TICKET:  {
            const id = action.payLoad.id;
            return {...initial, [id] : {...initial[id], status : 2} }
        }
        case CANCEL_TICKET : {
            const id = action.payLoad.id;
            return {...initial, [id] : {...initial[id], status : 0} }
        }

        case CALC_PRICE : {
            const {id, base, perHour} = action.payLoad;
            const finishTime = now();
            return {...initial, [id] : {...initial[id], price : calculatePrice(initial[id].timeStamp, finishTime, base, perHour), finishTime}}
        }
        default: return initial;
    }
    
    
}

export default addTicketReducer;