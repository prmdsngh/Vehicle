export const calculatePrice = (timeStamp, currTimeStamp, base, perhour) => {
    const days = calculateDays(currTimeStamp, timeStamp);
    const hours = days*24;
    let price = 0;
    if(hours > 1){
        const remainingSeconds = (hours - 1) * 3600;
        price += remainingSeconds * (perhour/3600);
    }
    return (base + price);
}

const calculateDays = (timestamp1, timestamp2) => {
    var difference = timestamp1 - timestamp2;
    var daysDifference = difference/1000/60/60/24;
    return daysDifference;
}