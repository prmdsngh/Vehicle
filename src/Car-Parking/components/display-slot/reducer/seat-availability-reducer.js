import { BOOK_SLOT, CANCEL_SLOT } from "../../../Utils/StringConst";

const getSeatData = (group=" ", start, range) => {
    let data = {};
    for(let num = start ; num < range ; num++){
        data[num] = { num, group, id : num, status : 1}
    }
    return data;
}
const seatAvailability = {
    '1A' : getSeatData('1A', 1, 11),
    '2A' : getSeatData('2A', 11, 21),
    '3A' : getSeatData('3A', 21, 31),
}

export const slotAvailabilityReducer = (initial = seatAvailability , action) => {
    switch (action.type) {
        case BOOK_SLOT:{
                const {group, num} = action.payLoad;
                return {...initial, [group] : {...initial[group], [num] : {...initial[group][num], status : 0}}}
                }
        case CANCEL_SLOT : {
                const {group, num} = action.payLoad;
                return {...initial, [group] : {...initial[group], [num] : {...initial[group][num], status : 1}}}
                }
        default: return initial;
    }
}