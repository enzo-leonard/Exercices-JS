const body = document.querySelector('body')




const addZero = (number) => number < 10 ? '0' + number : number

const getTime = () => {
    const date = new Date()
    const minutes = addZero(date.getMinutes())
    const hours = addZero(date.getHours())
    const seconds = addZero(date.getSeconds())

    body.innerHTML = `${hours} : ${minutes} : ${seconds}`     
}
getTime()

setInterval(getTime, 1000)
