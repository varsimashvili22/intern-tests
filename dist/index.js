export function isTimeZoneValid(zone) {
    const match = zone.match((/^(\+(?<positiveHours>(0\d|1[0-4])):(?<positiveMinutes>(00|30|45)))$|^((\-(?<negativeHours>(0\d)|(1[0-2])):(?<negativeMinutes>(00|30))))$/));
    ;
    const posHours = Number(match?.groups.positiveHours);
    const posMinutes = Number(match?.groups.positiveMinutes);
    const negHours = Number(match?.groups.negativeHours);
    const negMinutes = Number(match?.groups.negativeMinutes);
    if (!match) {
        return false;
    }
    if (posHours > 14 || negHours > 12) {
        return false;
    }
    if (!isNaN(posMinutes) && posMinutes != 0) {
        if (posMinutes == 30) { //'+03:30', '+04:30', '+05:30', '+06:30', '+09:30', '+10:30', 
            if ([3, 4, 5, 6, 9, 10].includes(posHours)) {
                return true;
            }
        }
        if (posMinutes == 45) { //'+08:45', '+05:45', '+12:45', '+13:45'
            if ([5, 8, 12, 13].includes(posHours)) {
                return true;
            }
        }
        return false;
    }
    if (!isNaN(negMinutes) && negMinutes != 0) {
        if (negMinutes == 30) { //'-09:30', '-03:30', '-02:30', 
            if ([2, 3, 9].includes(negHours)) {
                return true;
            }
        }
        return false;
    }
    return true;
}
