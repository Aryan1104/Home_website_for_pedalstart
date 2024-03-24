let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    login.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

// ======================================chart

const ctx = document.getElementById('myChart').getContext('2d');

// Example data (replace with your data)
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const stocksData = [50, 60, 75, 90, 120];

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Stocks Data',
            data: stocksData,
            borderColor: 'rgb(75, 192, 192)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
      }
    }
});