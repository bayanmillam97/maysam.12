const hart = document.querySelector("#chart").getContext('2d');
// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jen','Feb','Apr','May','Jun','Aug','Sep','Oct','Nov',],
        
        datasets: [
            {
                label: 'BTC',
                data: [29374, 25385, 45854, 45910, 73542, 63538, 99124, 32543, 66412, 53639, 53555],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [3150, 41000, 88800, 26000, 88800, 41000, 5000, 3000, 24832, 36944, 53555],
                borderColor: 'blue',
                borderWidth: 2
            },
        ]
    },
    option: {
        responseive: true
    }
})


const themeBtn = document.querySelector('.theme-botn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
})