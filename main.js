var menu= ["Margherita Pizza", "Paneer Tikka Pizzza", "Pasta Pizza", "Vegetable Pizza"] 

function getmenu(){

    for (var i=1; i<5; i++){
        var id= menu+i;
        var name= document.getElementById(id).value+"<br><br><br>"

        document.getElementById(display).innerHTML= name;

    }
}





        
    

