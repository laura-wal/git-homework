// make the bank input a value and dispaly 
// it write code to add and subtract from it.
// 
// account1



// var account1 = $( "input" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "balance" ).text( value );
//   })
//   .keyup();
  
// })

// var newbalance = "accout1" + "balance";

// newbalance


// // var account1 = $(function(){
// //   $('input').on("keydown", function(){
// //     var input = $(this).val();
// //     $(".result").text(input);
// //     console.log(input);
// //   });
// // });

//   $("#dosomething").click(function(){
//     $("#deftext").val("input");
//   });
// });

//----------------------------------
// $(document).ready(function(){

//   var setUpEventListeners = function(){
//    $("#deposit1").click(function(){
//      var desposit = $("#amount1").val();
//      console.log(desposit);
//      $("#balance1").text(desposit);
//    });
// });

  // ---------------------------
  //$(input).html("#balance1");
  // console.log("balance1");


//   //second try
//   $(document).ready(function(){
 
//  $("#deposit1").click(function(){
//    var desposit = $("#amount1").val();
//    return
//    console.log(desposit);
//   });
//-----------------------------good stuff below
// var deposit;

// deposit = parseInt($("#amount1").val());


// var setUpEventListerners = function(){
//  $("#deposit1").click(function(){
//    var deposit = parseInt($("#amount1").val());
//    console.log(deposit);
//    $("#balance1").text(deposit);
//  });

// }

// $(document).ready(function(){
 
//  setUpEventListerners();

// });

// var total = deposit;   
//  $("balance1").each( function(deposit){
//   total += $(this).val() * 1;
//   total();
// });
 
//  console.log(total);



var totalbalance1 = 0;
var totalbalance2 = 0;
var deposit = ""
var accounttotal = ""


if (accounttotal < 0); 
return $(this).("account").css('border: red');

var setUpEventListerners = function(){


 
   $("#deposit1").on('click', function(){
      desposit = parseInt($("#amount1").val());
        console.log(desposit);
          totalbalance1 += Number(desposit);
    $("#balance1").html(totalbalance1); 
   });


  $("#withdraw1").on('click', function(){
     desposit = parseInt($("#amount1").val());
        console.log(desposit);
           totalbalance1 -=  Number(desposit);
    $("#balance1").html(totalbalance1); 
    $
   });

  $("#deposit2").on('click', function(){
       desposit = parseInt($("#amount2").val());
         console.log(desposit);
           totalbalance2 += Number(desposit);
    $("#balance2").html(totalbalance2); 
   });


  $("#withdraw2").on('click',function(){
      desposit = parseInt($("#amount2").val());
        console.log(desposit);
          totalbalance2 -= Number(desposit);
    $("#balance2").html(totalbalance2); 
    $
   });

 $( ".status" ).each(function(){
       var value = parseInt( $( this ).html() );
       if ( value < 0 )
       {
           $( this ).parent().css('background-color', 'red');
       }
   });

}

$(document).ready(function(){
 
 // call a function with your event listeners
 setUpEventListerners();

});




