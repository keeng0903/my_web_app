$(document).ready(function(){
  // var myTd = $('#my-id');
  // var trs = $('tr');
  // var hightlighteds = $('.highlighted');
  // var tds = $('td');

  // $('tr').on('mouseover',function(event){
  //   event.preventDefault();
  //   $('.highlighted').removeClass('highlighted');
  //   $(this).addClass('highlighted');
  // });
  //
  // $('tr').on('mouseout',function(event){
  //   event.preventDefault();
  //   $('.highlighted').removeClass('highlighted');
  //   // $(this).addClass('highlighted');
  // });

  $('td').on('mouseover',function(event){
    event.preventDefault();
    $('#my-id').html(`<span class="my-td-span">${$(this).text()}</span>`);
  });

  $('td').on('mouseout',function(event){
    event.preventDefault();
    $('#my-id').html(null);
  });
});

/* $(function(){
  alert("Quang.");
})*/
