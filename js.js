var testes = parseInt(document.getElementById("testes").innerHTML);
var students= ["ryslan","merei","arnai","miras","eldos","beksultan","kuat","sabina","eldar","saken"];
var mainLine = document.getElementById("mainLine");
var point = document.getElementsByClassName("point");
var line = document.getElementsByClassName("line");
function HowMuchTest(){

    testes++;
    var add_main_line = document.createElement("td");
    add_main_line.innerHTML = "test №<span class=\"testes\">" + testes + "</span> <br><input type=\"date\">";
    mainLine.insertBefore(add_main_line,point[0]);  
    
    var add_line;
    
    for(var i = 0; i<line.length; i++){
        add_line = document.createElement("td");
        add_line.innerHTML = '<input type="number" class="test'+ testes +' '+ students[i] +'" value="0">';
        line[i].insertBefore(add_line,point[i+1]);
    }
    document.getElementById("testes").innerHTML = testes;
}
var point_count = 0;
function point_function(){
    var sum_point = 0;
    var student_point;
    for(var i = 0; i < students.length; i++){
        student_point = document.getElementsByClassName(students[i]);
        
        for(var j = 0; j < student_point.length; j++){
           student_point[j].setAttribute("value",student_point[j].value);
            sum_point = sum_point + parseInt(student_point[j].value);
        }
        average_score = sum_point / student_point.length;
        point_count++;
        point[point_count].innerHTML = average_score;
        
        sum_point = 0;
    }

}

// function ryslan_diagramme(){
//     document.getElementById("testt").innerHTML = '<script src="char_js.js" defer></script>'
    
// }