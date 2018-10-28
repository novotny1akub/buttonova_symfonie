/*
$(this).hide() - hides the current element.
$("p").text('Hello World!') - changes all <p> elements to Hello World
$("#test").text() - hodnota u pole s ID #test
$(".test").hide() - hide all elemnts of class .test

$(document).ready(function(){ // až se načte HTML dokument
    $("button").click(function(){
        $("p").hide(); // schovej všechny "p"
    });
});

// jQuery selectors:  https://www.w3schools.com/jquery/jquery_selectors.asp

Mouse Events:
    click, dblclick, mouseenter, mouseleave
Keyboard Events:
    keypress, keydown, keyup
Form Events:
    submit, change, focus, blur
Document/Window Events
    load, resize, scroll, unload

$("p").on("click", function(){
    $(this).hide();
});

$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
}); 

*/

$("#button1_m").on("mouseover", () => {
     if ( $('#button1_s').css('background-color') === 'rgb(173, 216, 230)' ){
        $('#button1_s').css('background-color', 'rgb(0, 0, 255)')
     } else{
        $('#button1_s').css('background-color', 'rgb(173, 216, 230)')
     }
    // lightblue = rgb(173, 216, 230), blue = rgb(0, 0, 255)
    $('#button1_s').toggle(1000)
})

$("#button2_m").on("mouseover", () => {
    if ( $('#button2_s').css('background-color') === 'rgb(127, 255, 0)' ){
        $('#button2_s').css('background-color', 'rgb(0, 100, 0)')
     } else{
        $('#button2_s').css('background-color', 'rgb(127, 255, 0)')
     }
     // darkgreen = rgb(0,100,0), lightgreen = rgb(127,255,0)
    $('#button2_s').toggle(1000)
})

$("#button3_m").on("mouseover", () => {
    if ( $('#button3_s').css('background-color') === 'rgb(195, 1, 1)' ){
        $('#button3_s').css('background-color', 'rgb(148, 0, 0)')
     } else{
        $('#button3_s').css('background-color', 'rgb(195, 1, 1)')
     }
    // red = rgb(195, 1, 1), Darkred = rgb(92, 16, 16)
    $('#button3_s').toggle(1000)
})

$("#button4_m").on("mouseover", () => {
    if ( $('#button4_s').css('background-color') === 'rgb(255, 249, 174)' ){
        $('#button4_s').css('background-color', 'rgb(169,134,0)')
     } else{
        $('#button4_s').css('background-color', 'rgb(255,249,174)')
     }
    // yellowlight = rgb(255,249,174), yellowdark = rgb(169,134,0)
    $('#button4_s').toggle(1000)
})

// on click events

$('button').on("click", () => {
    alert("Button says hello!!!")
})
