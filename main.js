var menu= ["Margherita Pizza", "Paneer Tikka Pizzza", "Pasta Pizza", "Vegetable Pizza","Veg Supreme Pizza"] 

function getmenu(){


var htmldata="";
htmldata= "<ol class= 'menulist'>"
menu.sort();
for(var i=0; i<menu.length; i++){

    htmldata=htmldata+ "<li>" +menu[i] + "</li>"
}
htmldata= htmldata+"</ol>"
document.getElementById("display").innerHTML= htmldata;
console.log(htmldata);


}

function add_item(){
    var data=""
    var item= document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
   data= '<section class="cards">';

    for(var y=0; y<menu.length;y++){
        data= data+ '<div class= "card">'+ '<img src="pizzaImg.png">' + menu[y]+"</div>";
    }
data=data+"</section>";
document.getElementById("idkwhatisthetitle").innerHTML= data;
console.log(data)
}








        
    

