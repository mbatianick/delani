$(document).ready(function(){
    //hide and show
    $(".des-hidden").click(function(){
        $(".des-hidden").hide();
        $(".des-showing").show();
    });
    $(".des-showing").click(function(){
        $(".des-showing").hide();
        $(".des-hidden").show();
    });

    $(".dev-hidden").click(function(){
        $(".dev-hidden").hide();
        $(".dev-showing").show();
    });
    $(".dev-showing").click(function(){
        $(".dev-showing").hide();
        $(".dev-hidden").show();
    });

    $(".prod-hidden").click(function(){
        $(".prod-hidden").hide();
        $(".prod-showing").show();
    });
    $(".prod-showing").click(function(){
        $(".prod-showing").hide();
        $(".prod-hidden").show();
    });
    

    //hover1
    $("#proj1").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover2
    $("#proj2").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover3
    $("#proj3").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover4
    $("#proj4").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover5
    $("#proj5").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover6
    $("#proj6").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover7
    $("#proj7").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    //hover8
    $("#proj8").hover(function(){
        $(this).animate({opacity: '0.5'});
    }, 
    function() {
        $(this).animate({opacity: '1'})
    });
    $("#submit").click (function(event){
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if(name===""||email===""){
            alert("please input your name and email")
        }
        else {
            alert("Thankyou" +name+ " for your message. We will get back to you shortly.")
        }

    })

});
