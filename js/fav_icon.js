//更改背景顏色
function pink(e){ 
    var icon_fav=document.getElementsByClassName("icon_fav");
   
    // var fav_center=document.getElementsByClassName("fav_center");
    //for是要每一個icon_fav都要做事情
    for(var k=0; k<icon_fav.length;k++){
        // if(e.currentTarget==icon_fav[k]){
            // var color = window.getComputedStyle(icon_fav[k]).getPropertyValue('background-color');
            // window.getComputedStyle(icon_fav[k]).getPropertyValue('backgroundColor');
            // console.log(color);
            //
            if(e.currentTarget.style.backgroundColor == 'rgba(0, 0, 0, 0.2)')
            {
                e.currentTarget.style.backgroundColor='rgb(244, 191, 191)';
            }
            else if(e.currentTarget.style.backgroundColor == 'rgb(244, 191, 191)'){
                e.currentTarget.style.backgroundColor='rgba(0, 0, 0, 0.2)';
            }
        // return;
        // };
    };
}
//監聽.icon_fav

//點擊後觸發 click
function init(){
    var icon_fav=document.getElementsByClassName("icon_fav");
    var fav_center=document.getElementsByClassName("fav_center");
    for(var i=0;i<icon_fav.length;i++){
        icon_fav[i].style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        icon_fav[i].addEventListener('click',pink,false);
    };
    // for(var j=0;j<fav_center.length;j++){
    //     fav_center[j].addEventListener('click',pink,false);
    // };

};
//渲染網頁
window.addEventListener('load',init);