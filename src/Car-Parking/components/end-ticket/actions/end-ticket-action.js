import { COMPLETE_TICKET, CANCEL_SLOT, CALC_PRICE } from "../../../Utils/StringConst";

export const endTicketAction = ({id, group, num}) => (dispatch, store) =>{
    console.log(store())
    const state = store()
    dispatch( {
        type : COMPLETE_TICKET,
        payLoad : {id}
    });
    dispatch({ type : CANCEL_SLOT, payLoad: {group, num}});
    dispatch({type : CALC_PRICE, payLoad: {id, ...state.pricing}});
}