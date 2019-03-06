// $(window).resize(logScreenSize);


$(function(){
  // logScreenSize();
  //resizeButtons();
  resizeElements(['.my-button-people-name','.my-button-jump-to-people']);
});


function logScreenSize(){

  var size;

  switch (true) {

    case Modernizr.mq('(min-width: 1200px)'):
      size = 'xl';
      break;

    case Modernizr.mq('(min-width: 992px)'):
      size = 'lg';
      break;

    case Modernizr.mq('(min-width: 768px)'):
      size = 'md';
      break;

    case Modernizr.mq('(min-width: 576px)'):
      size = 'sm';
      break;

    default:
      size = 'xs';
      break;

  }


  console.log(`The size of your screen is ${size}`);

}

// function resizeButtons(){
//   var width = 0;
//
//   $('.my-button-people-name').css('width','auto');
//
//   $('.my-button-people-name').each(function(){
//     var thisWidth = parseFloat($(this).css('width'));
//
//     if(thisWidth > width){
//       width = thisWidth;
//     }
//   });
//
//   $('.my-button-people-name').css('width', width);
// }
function resizeElements(elements){
  $.each(elements,function(index,element){
    var width = 0;

    $(element).css('width','auto');

    $(element).each(function(){
      var thisWidth = parseFloat($(this).css('width'));

      if(thisWidth > width){
        width = thisWidth;
      }
    });

    $(element).css('width', width);
  })
}
