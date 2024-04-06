const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const generateRandomData = async() => {
    return [
        getRandomInt(100),
        getRandomInt(200),
        getRandomInt(30)
    ]
}

(async function() {
    const chart = document.getElementById('chart1');

    const clientData = await generateRandomData();

    const labels = ['Bardzo zadowoleni', 'Niezwykle zadowoleni', 'Zadowoleni'];
    const colors = ['rgb(255, 176, 0)', 'rgb(0, 66, 37)', 'rgb(255, 207, 157)'];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Liczba klientów',
            data: clientData,
            borderWidth: 2,
            backgroundColor: colors
        }]
    };

    const config = {
        type: 'doughnut',
        data: data
    };

    new Chart(chart, config);
})();

const progressBar = () => {
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
}

window.onscroll = function() { progressBar() };
