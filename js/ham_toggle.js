function showMenu(e){
    // var line=document.getElementsByClassName('line');
    var nav_menu=document.getElementsByClassName('nav_menu');
 
    // nav_menu.addEventListener('click',showMenu,false);
    var disShow=window.getComputedStyle(nav_menu[0]).getPropertyValue('display');
    // console.log(disShow);
    if(disShow=='none'){
        nav_menu[0].style.display='block'
    }else if(disShow == 'block'){
        nav_menu[0].style.display='none';        
    };
    
  
};
function init(){
    var nav_menu=document.getElementsByClassName('nav_menu');
    nav_menu[0].addEventListener('click',showMenu,false);
    // nav_menu[0].style.display="none";
    var nav_ham=document.getElementById('nav_ham');
    nav_ham.addEventListener('click',showMenu,false);
    // var line=document.getElementsByClassName('line');
    // for(var i=0;i<line.length;i++){
    //     line[i].addEventListener('click',showMenu,false);
    //     // alert(123);
    // }

};
window.addEventListener('load',init);