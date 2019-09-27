function Button(){

    this.clicked = false;
    
    this.click = function(){
        this.clicked = true;
        console.log(button.clicked, 'Button clicked');
    };

}
var button = new Button();
var elem = document.getElementById("test");
elem.addEventListener("click", button.click);