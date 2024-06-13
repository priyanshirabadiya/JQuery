// Jquery animate effect

// animate({params} , speed , callbacks)
//  To give only one css property : css("background-color","red")  // css("")
//  To more than one css property : css("background-color":"red" , "font-size":"30px") 


// $(function() {
//     $('#demo').click(function() {
//         $('#animate').animate({
//             left:"600px",
//             fontSize:"50px"
//             },3000,function(){
//             $('#animate').css({
//                 "backgroud-color":"red",
//                 "color":"aqua"
//             })
//         })
//     } )
// } ) 


/* jQuery stop() effect */

// $(function () {
//     $('#demo').click(function () {
//         $('#slide').slideDown(4000)
//         // $('#slide').slideUp(2000)
//         // $('#slide').fadeIn()
//         // $('#slide').fadeOut()
//     })
// })

// $(function() {
//     $('.stop').click(function() {
//         $('#slide').stop();
//     } )
// } )


// Jquery html

/*
    get
    set
    addclass
    removeclass
    after
    before
    append
    prepend
*/


// Get method

// text(),html(),val()

// $(function(){
//     $('.click-btn').click(function(){   //give on contain of span
//         alert($('.para').text())
//     })
// })


// $(function(){
//     $('.click-btn').click(function(){
//         alert($('#inputs').val())
//     })
// })

// $(function(){
//     $('.click-btn').click(function(){   //give span with color
//         alert($('.para').html())  
//     })
// })


// $(function(){
//   $(".click-btn").click(function(){
//    $(".para").before("Hello World")
//   })
// })


// $(function(){
//     $(".click-btn").click(function(){
//      $(".para").after("Hello World")
//     })
//   })
  


// $(function(){
//   $(".click-btn").click(function(){
//     $(".para").html("<b>JQUERY</b>")
//   })
// })
