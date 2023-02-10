$(document).ready(function(){

           //********START Nav Bar Fix(Start 2nd section & close 2nd section) Rakhne ke liye*******//

      $('.js--section-features').waypoint(function(direction){
            if(direction=="down"){
                  $('nav').addClass('sticky');
            } else{
                  $('nav').removeClass('sticky');
            }
           //********END Nav Bar Fix(Start 2nd section & close 2nd section) Rakhne ke liye*******//
      },{
      offset:'60px'     //<------ 1st section complete hone ke 60px pahle sticky add ho jayegi//
      });

      //********START 1st section button script*******//
      $('.js--plans').click(function(){
            $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
      });
      $('.js--features').click(function(){
            $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
      });
       //********END 1st section button script*******//



       $('.js--wp-1').waypoint(function(direction){
             $('.js--wp-1').addClass('animated animate__fadeIn');
       },{
      offset:'50%'     //<------ --***** Features Section Animation START*****//
      });

       $('.js--wp-2').waypoint(function(direction){
             $('.js--wp-2').addClass('animated animate__fadeInUp');
       },{
      offset:'50%'     //<------ --***** App Use Section Animation START*****//
      });

       $('.js--wp-3').waypoint(function(direction){
             $('.js--wp-3').addClass('animated animate__fadeInUp');
       },{
      offset:'50%'     //<------ --*****Cities Section Animation START*****//
      });

       $('.js--wp-4').waypoint(function(direction){
             $('.js--wp-4').addClass('animated  animate__fadeInRight');
       },{
      offset:'50%'     //<------ --***** Price Plans Section  Animation START*****//
      });
});
