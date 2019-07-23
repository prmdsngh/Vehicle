import { BOOK_SLOT, CANCEL_SLOT } from "../../../Utils/StringConst";

export const BookSlotAction = ({group, num}) => dispatch => {
    debugger;
    dispatch({
        type : BOOK_SLOT,
        payLoad : {group, num}
    })
}

export const CancelSlotAction = ({group, num}) => dispatch => {
    dispatch( {
        type : CANCEL_SLOT,
        payLoad : {group, num}
    })
}