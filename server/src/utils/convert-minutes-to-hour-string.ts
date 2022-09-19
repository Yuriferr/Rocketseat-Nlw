export function convertMinutesToHourString(minutesAcount: number) {
    const hours = Math.floor(minutesAcount / 60);
    const minutes = minutesAcount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}