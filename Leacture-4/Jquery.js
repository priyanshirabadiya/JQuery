/* jQuery remove / empty */

// $(function(){
//   $('button').click(function(){
//     $('span').remove()
//   })
// })


// Attribute is being as it is but contain is being empty  //ex : <span></span>
// $(function(){
//   $('button').click(function(){
//     $('span').empty()
//   })
// })


// jQuery Add Method */
/* jQuery append / prepend / after  / before */

// $(function(){
//   $("button").click(function(){
//     $('span').append("Hello World")
//   })
// })


// $(function(){
//   $("button").click(function(){
//     $('span').prepend("Hello World")
//   })
// })


// $(function(){
//   $("button").click(function(){
//     $('span').after("Hello World")
//   })
// })

// $(function(){
//   $("button").click(function(){
//     $('span').before("Hello World")
//   })
// })


/* jQuery removeClass / addClass / toggleClass */

// $(function(){
//   $("button").click(function(){
//     $("div").removeClass('text')
//   })
// })

// $(function(){
//   $("button").click(function(){
//     $("div").addClass('box')
//   })
// })

// $(function(){
//   $("button").click(function(){
//     $("div").toggleClass('box')
//   })
// })


/* jQuery Traversing */

/* Traversing Ancestors */

/* parent  , parents  , parentsUntil */

// It's give only first parent is only liChild
// $(function() {
//     $('button').click(function() {
//         $('.spanChild').parent().css({
//             'background-color':"green"
//         })
//     })
// } )

// returns all parents of body
// $(function(){
//   $('button').click(function(){
//    $(".spanChild").parents().css({
//      'background-color':"green"
//    })
//   })
//  })


// $(function(){
//   $('button').click(function(){
//    $(".spanChild").parentsUntil('.divParent').css({
//      'background-color':"green"
//    })
//   })
//  })

/* Traversing Decendent */


// $(function () {
//     $('button').click(function () {
//         $('.liChild').children().css({
//             'background-color': "green"
//         })
//     })
// })


// $(function(){
//     $('button').click(function(){
//         $('.divparent').find('strong').css({
//             'background-color':"green"
//         })
//     })
// })



/* Traversing siblings */


/*
 sibling
 next
 nextAll
 nextUntil
 prev
 prevAll
 prevUntil
*/

// $(function(){
//     $('button').click(function(){
//         $('.sibling').siblings().css({
//             "background-color":"green"
//         })
//     })
// })

// $(function () {
//     $('button').click(function () {
//         $('.sibling').next().css({
//             'background-color': "green"
//         })
//     })
// })


// $(function () {
//     $('button').click(function () {
//         $('.sibling').nextAll().css({
//             'background-color': "green"
//         })
//     })
// })

// $(function () {
//     $('button').click(function () {
//         $('.sibling').nextUntil().css({
//             'background-color': "green"
//         })
//     })
// })

// $(function(){
//   $("button").click(function(){
//     $('.sibling').prevAll().css({
//       'background-color': "green"
//     })
//   })
// })

// $(function(){
//   $("button").click(function(){
//     $('.sibling').prevUntil('div').css({
//       'background-color': "green"
//     })
//   })
// })


/* jQuery Filter */