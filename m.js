var days = document.getElementById('days')
var hours = document.getElementById('hours')
var mins = document.getElementById('mins')
var secs = document.getElementById('secs')

function countdown(){
    //Event Date
    const date = new Date('6/21/2024').getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = date - now

        days.innerText = formatNumber(Math.floor(distance/day))
        hours.innerText = formatNumber(Math.floor((distance%day)/hour))
        mins.innerText = formatNumber(Math.floor((distance%hour)/minute))
        secs.innerText = formatNumber(Math.floor((distance%minute)/second))
        
        if(distance < 0){
            document.getElementById('countdown').style.display = 'Time to Party!!!'
            clearInterval(interval)
        }
    
    }, 1000)

}

function formatNumber(number){
    if(number < 10){
        return '0' + number
    }
    return number
}

countdown()
//sections disapearence
// Get the element to animate
const element = document.querySelector('.overlay-name');
// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};


