$(document).ready(function(){
  var myTd = $('#my-id');

  $('td').on('click',function(event){
    event.preventDefault();
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  })
});
/* $(function(){
  alert("Quang.");
})*/
