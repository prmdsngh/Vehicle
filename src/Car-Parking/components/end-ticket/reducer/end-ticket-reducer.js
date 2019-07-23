import { COMPLETE_TICKET } from "../../../Utils/StringConst";

const completeTicketReducer = (initial = {}, action) => {
    if(action.type === COMPLETE_TICKET) {
        const id = action.payLoad.id;
        return {...initial, [id] : action.payLoad}
    }
    return initial;
}
export default completeTicketReducer;