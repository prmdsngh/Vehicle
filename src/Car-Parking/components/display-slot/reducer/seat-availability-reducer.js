import { BOOK_SLOT, CANCEL_SLOT } from "../../../Utils/StringConst";
import {totalSeats} from '../../../Utils/numConst';

const getSeatData = (start, range) => {
    let data = {};
    for(let num = start ; num < range ; num++){
        data[num] = { num, id : num, status : 1}
    }
    return data;
}
const seatAvailability = {
    ...getSeatData( 1, totalSeats),
}

export const slotAvailabilityReducer = (initial = seatAvailability , action) => {
    switch (action.type) {
        case BOOK_SLOT:{
                const {num} = action.payLoad;
                return {...initial, [num] : {...initial[num], status : 0}}
                }
        case CANCEL_SLOT : {
                const {num} = action.payLoad;
                return {...initial, [num] : {...initial[num], status : 1}}
                }
        default: return initial;
    }
}