import { ADD_TICKET } from "../../../Utils/StringConst";
import history from "../../../history";

export const addTicketAction = ({name, vehicle, timeStamp, slot, status}) => (dispatch) => {
    dispatch({
        type : ADD_TICKET,
        payLoad : {
            name, vehicle, timeStamp, slot, status
        }
    })
    history.push('/')
}