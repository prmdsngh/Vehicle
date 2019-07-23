import { CANCEL_TICKET, CANCEL_SLOT } from "../../../Utils/StringConst";
import history from "../../../history";

export const cancelTicketAction = ({id, group, num}) => dispatch =>{
    dispatch( {
        type : CANCEL_TICKET,
        payLoad : {id}
    });
    dispatch({ type : CANCEL_SLOT, payLoad: {group, num}})
    history.push('/list/active');
}