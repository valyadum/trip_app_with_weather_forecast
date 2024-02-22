function getDayOfWeek(time) {
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const indexDay = new Date(time);
    const day = indexDay.getDay();
    return dayNames[day];
}
export default  getDayOfWeek ;