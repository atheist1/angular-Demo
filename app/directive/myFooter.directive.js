module.exports = function(){
    return {
        restrict:'AECM',
        replace:false,
        templateUrl:'../app/views/template/footer.html',
        link:function(scope,element,attr,controller){
            // $('.focus').hover(function() {
            //     /* Stuff to do when the mouse enters the element */
            //     $('.focusWeixin').show('normal').animate({opacity:1},200)
            // }, function() {
            //     /* Stuff to do when the mouse leaves the element */
            //     $('.focusWeixin').css({'display':'none','opacity':'0'})
            // });
            var focus = document.getElementsByClassName('focus')[0];
            var wx = document.getElementsByClassName('focusWeixin')[0];
            focus.onmouseover = function(){
                if( wx.style.display!='block'){
                    wx.style.display = 'block'
                    wx.style.opacity = 1;
                }else{
                    wx.style.display = 'none'

                }

            }
        }
    }
}