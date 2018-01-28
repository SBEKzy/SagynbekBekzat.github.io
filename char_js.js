function Ryslan(){
    

    google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var number = parseInt(document.getElementById("s_ryslan").value);
        var students= ["ryslan","merei","saken"];
        //var student_every_point = document.getElementsByClassName(students[number-1])
        var one_student = document.getElementsByClassName(students[number-1]);
        var data = google.visualization.arrayToDataTable([
                [students[number-1], 'Sales'],
                [students[0], parseInt(one_student[0].value)],
                [students[0], parseInt(one_student[1].value)],
                [students[0], parseInt(one_student[2].value)],
                [students[0], parseInt(one_student[3].value)],
                [students[0], parseInt(one_student[4].value)]    
                // -------------------------------------------
        ]);
         
            
                
            
            var options = {
            chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            }
            };

            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
}          