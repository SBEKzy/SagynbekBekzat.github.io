function Diagramme_show_button(nnn){
    

    google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var number = nnn;//parseInt(document.getElementsByClassName("s")[0].value);
        var students= ["ryslan","merei","arnai","miras","eldos","beksultan","kuat","sabina","eldar","saken"];
        var one_student = document.getElementsByClassName(students[number-1]);
        if(one_student.length == 2){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)]    
                // -------------------------------------------
        ]);
        }
        else if(one_student.length == 3){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)],
                ["тест №3", parseInt(one_student[2].value)]    
                // -------------------------------------------
        ]);
        }
    else if(one_student.length == 4){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)],
                ["тест №3", parseInt(one_student[2].value)],
                ["тест №4", parseInt(one_student[3].value)]    
                // -------------------------------------------
        ]);
        }
    else if(one_student.length == 5){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)],
                ["тест №3", parseInt(one_student[2].value)],
                ["тест №4", parseInt(one_student[3].value)],
                ["тест №5", parseInt(one_student[4].value)]    
                // -------------------------------------------
        ]);
        }
    else if(one_student.length == 6){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)],
                ["тест №3", parseInt(one_student[2].value)],
                ["тест №4", parseInt(one_student[3].value)],
                ["тест №5", parseInt(one_student[4].value)],
                ["тест №6", parseInt(one_student[5].value)]    
                // -------------------------------------------
        ]);
        }
    else if(one_student.length == 7){
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)],
                ["тест №2", parseInt(one_student[1].value)],
                ["тест №3", parseInt(one_student[2].value)],
                ["тест №4", parseInt(one_student[3].value)],
                ["тест №5", parseInt(one_student[4].value)],
                ["тест №6", parseInt(one_student[5].value)],
                ["тест №7", parseInt(one_student[6].value)]    
                // -------------------------------------------
        ]);
        }
    else{
            var data = google.visualization.arrayToDataTable([
                [students[number-1], 'көрсеткіш'],
                ["тест №1", parseInt(one_student[0].value)]                   
                // -------------------------------------------
        ]);
        }           
            var options = {
            chart: {
                title: 'әрбір оқушының көрсеткіші',
                subtitle: '11 а',
            }
            };
            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
}     
function Tests(nnn){    
google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
        var number = nnn;//parseInt(document.getElementsByClassName("s")[0].value);
        var tests= ["test1","test2","test3","test4","test5","test6","test7"];
        var one_test = document.getElementsByClassName(tests[number-1]);
        
            var data = google.visualization.arrayToDataTable([
                [tests[number-1], 'көрсеткіш'],
                ["Руслан", parseInt(one_test[0].value)],
                ["Мерей", parseInt(one_test[1].value)],
                ["Арнай", parseInt(one_test[2].value)],
                ["Мирас", parseInt(one_test[3].value)],
                ["Елдос", parseInt(one_test[4].value)],
                ["Бексултан", parseInt(one_test[5].value)],
                ["Куат", parseInt(one_test[6].value)],
                ["Сабина", parseInt(one_test[7].value)],
                ["Елдар", parseInt(one_test[8].value)],
                ["Сакен", parseInt(one_test[9].value)]    
                // -------------------------------------------
        ]);
        
         
            var options = {
            chart: {
                title: 'әрбір оқушының көрсеткіші',
                subtitle: '11 а',
            }
            };
            var chart = new google.charts.Bar(document.getElementById('material'));
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
}        
