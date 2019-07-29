import { BOOK_SLOT, CANCEL_SLOT } from "../../../Utils/StringConst";

export const BookSlotAction = ({num}) => dispatch => {
    debugger;
    dispatch({
        type : BOOK_SLOT,
        payLoad : {num}
    })
}

export const CancelSlotAction = ({num}) => dispatch => {
    dispatch( {
        type : CANCEL_SLOT,
        payLoad : {num}
    })
}