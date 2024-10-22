let box = document.querySelector('.card');
let inputt = document.querySelector('#color');
let input = document.querySelector('.innn');
let demo = document.getElementById("demo");
let dem = document.querySelector(".ch");
let xx = document.querySelector('.x1');
let xx1 = document.querySelector('.hh');
let border_color = document.querySelector('.border-color');
let vaa = document.getElementById("kanu");
let Rbord = document.getElementById("border");
let border_ra = document.getElementById("border-ra");
let border_top_left_radius = document.getElementById("border-top-left-radius");
let border_top_right_radius = document.getElementById("border-top-right-radius");
let border_bottom_right_radius = document.getElementById("border-bottom-right-radius");
let border_bottom_left_radius = document.getElementById("border-bottom-left-radius");




inputt.addEventListener('input',()=>{
    box.style.backgroundColor = inputt.value;
    document.getElementById("p").innerHTML = ` background-color: ${inputt.value}; `;

    
});

input.addEventListener('input',()=>{
    
    box.style.borderStyle = input.value;
   
    
});
border_color.addEventListener('input',()=>{
    
    box.style.borderColor = border_color.value;
    document.getElementById("pp").innerHTML = `border: 3px ${input.value} ${border_color.value}; `;
});

dem.onclick = function(){
    if(dem.checked){
        document.getElementById("border-rad-more").style.display = "block";
        document.getElementById("border-bottom").style.display = "block";
        border_ra.style.display = "none";
        vaa.disabled = true;
        vaa.classList.add("rang") 
    }
    else{
        document.getElementById("border-rad-more").style.display = "none" ;
          document.getElementById("border-bottom").style.display = "none";
        border_ra.style.display = "block";
        vaa.disabled = false; 
        vaa.classList.remove("rang")
    }
}

function my(){
    demo.style.display = "flex" ;
    xx.style.display = "block" ;  
    }
    function x(){
        demo.style.display = "none" ;
        xx.style.display = "none" ;  
    }
    
//******************borderRadius****************
    
    vaa.oninput = function() {
        Rbord.innerHTML = `${this.value} %`;
        box.style.borderRadius = this.value + "%";
        document.getElementById("border-ra").innerHTML = `border-radius: ${this.value}%;`;
      };
      
      border_top_left_radius.oninput = function() {
        document.getElementById("border-top-left").innerHTML = `border-top-left-radius: ${this.value}%;`;
        box.style.borderTopLeftRadius = this.value + "%";
        document.getElementById("bo1-top").innerHTML = `${this.value} %`;
      };
      
      border_top_right_radius.oninput = function() {
        document.getElementById("border-top-right").innerHTML = `border-top-right-radius: ${this.value}%;`;
        box.style.borderTopRightRadius = this.value + "%";
        document.getElementById("bo2-top").innerHTML = `${this.value} %`;
      };
      
      border_bottom_right_radius.oninput = function() {
        document.getElementById("border-bottom-right").innerHTML = `border-bottom-right-radius: ${this.value}%;`;
        box.style.borderBottomRightRadius = this.value + "%";
        document.getElementById("bo3-top").innerHTML = `${this.value} %`;
      };
      
      border_bottom_left_radius.oninput = function() {
        document.getElementById("border-bottom-left").innerHTML = `border-bottom-left-radius: ${this.value}%;`;
        box.style.borderBottomLeftRadius = this.value + "%";
        document.getElementById("bo4-top").innerHTML = `${this.value} %`;
      };
