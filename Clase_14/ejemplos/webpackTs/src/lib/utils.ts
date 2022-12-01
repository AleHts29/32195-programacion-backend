export const getTime = () => {
    return {
        fyh: new Date().toLocaleString(),
        timeStamp: Date.now()
    }
}