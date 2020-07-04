var ctx = document.getElementById('myChart');
var ctx1 = document.getElementById('myChart1');
var ctx2 = document.getElementById('myChart2');
var ctx3 = document.getElementById('myChart3');

var avg_income = [1358550, 752122, 1488205, 816939, 2039763];
var City = ['Dallas', 'Mountain View', 'Washington DC', 'Chicago', 'New York'];

var myChart = new Chart(ctx, {
 type: 'bar',
 data: {
    labels: City,
    datasets: [{
        label: 'Income',
        data: avg_income,
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
            ]
    }]
 },
 
})

var myChart1 = new Chart(ctx1, {
    type: 'pie',
    data: {
       labels: City,
       datasets: [{
           label: 'Income',
           data: avg_income,
           backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)"
               ]
       }]
    }
   })

   var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
       labels: City,
       datasets: [{
           label: 'Income',
           data: avg_income,
           backgroundColor: [
               "rgba(54, 162, 235, 0.2)",
               ]
       }]
    }
   })

   var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
       labels: City,
       datasets: [{
           label: 'Income',
           data: avg_income,
           backgroundColor: [
                "red",
                "blue",
                "green",
                "yellow",
                "orange"
               ]
       }]
    }
   })

   myChart.render();
   myChart1.render();
   myChart2.render();
   myChart3.render();