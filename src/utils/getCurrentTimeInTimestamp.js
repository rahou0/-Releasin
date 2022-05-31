module.exports.getCurrentTimeInTimestamp = () => {
    return Math.floor(new Date().getTime() / 1000);
}