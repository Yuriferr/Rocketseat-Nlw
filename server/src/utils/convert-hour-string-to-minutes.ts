export function convertHourStringToMinutes(hourString: string) {
    const [hour, minutes] = hourString.split(':').map(Number)

    const minutesAcount = (hour * 60) + minutes;
    
    return minutesAcount;
}
