/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    const correctFormat = (num) => num<10? `0${num}`: `${num}`
    const hours = Math.floor(seconds/3600)
    const minutes = Math.floor((seconds-hours*3600)/60)
    const second = seconds-hours*3600-minutes*60
return `${correctFormat(hours)}:${correctFormat(minutes)}:${correctFormat(second)}`
}

console.log(humanReadable(660))
