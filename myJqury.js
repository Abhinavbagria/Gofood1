$(document).ready(function () {
    
    console.log("Jquery is woking ")
    // $('selector').click();
    //    $('p').click();
    //    $('p').click(function(){
    //     console.log("hyyy thiss iss ");


    // there are 3 types of selector in jquery 
    // 1 Element selector 
    // 2 id selector 
    // 3 class selector 

    //this is an example of element selector 
    $('p').click(function () {
        console.log("hy!!! ", this)
    });

    $('p').click();
    // example of id selector 
    $('#second').click(this);





    //example of class selector 
    $('.third').click();




// type of events 
//  mouse events = onchange, onlick,mouseenter,mouseleave,
// keyboard = onkeydown, onkeypress,onkeyup;

$('h1').hover( function(){
    console.log("hoverd...");

});


$('h1').hover();


$('h2').on({
    click:function () {
        console.log("thanksssss for clickingggggggg")
    },
    mouseleave: function(){
        console.log("thankssssss forr mouseleavingggggg")
    }
})
    
    // $('#aa').hide(2000,function(){
        //     console.log("hide is working ")
        // });
        
        
        // $("#btn").click(function () {
            //     $('#aa').toggle(2000);
            
            // })
            
            
            //animate function in jqueryys
            // $(selector).animate({
                //     opacity:0.3,
                //     height:'150px',
                //     width:'350px'
                // },2000)
                
                $('#btn2').click(function () {
                    $('#aa').toggle(2000);
                })




// using css in jQuery 
$('#aa').css('background-color' ,'red');














            })
                