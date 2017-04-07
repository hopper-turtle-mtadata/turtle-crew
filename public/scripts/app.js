$(function () {

  const list = $('.list');

  list.click(function(){
     $('#UserInput').empty();
     $('#UserInput').val(this.innerText);
     $('.list').hide();
  });

  // const $clickApendr = $('.list').on('click', function(e) {
  //   console.log(e);
  //   let m = $(e.target).parent();
  //   console.log(m);
  //   let children = m.children();
  //   let name = $(children).text();
  // })

// var list = $('.list');
//

//   list.click(function(){
//    $('#UserInput').empty();
//    $('#UserInput').val(list.text);
//    list.empty();
//
// });

//set up good just get the json values
const Calling = (album) => {

    const albumContainer = $('<div></div>').addClass('albumContainer');
    result = $('<div class="result">').text(album.Result);
    lat = $('<div class="lat">').text(album.latitude);
    long = $('<div class="long">').text(album.longitude);
    $('.albumContainer').remove();
     result.appendTo(albumContainer);
     lat.appendTo(albumContainer);
     long.appendTo(albumContainer);
    $('#resultsContainer').append(albumContainer);
  }

  $('#searchSubmit').on('click', event => {
      const UserInputVal = $('#UserInput').val();
      const Alldays = $('#Days').val();
      const hoursVal = $('#hours').val();
        console.log(UserInputVal);
        console.log(Alldays);
        console.log(hoursVal);

    // http://localhost:5000/predict?STATION=%221%20AV%22&DAY=%22Monday%22&TIME=5
    console.log('http://127.0.0.1:5000/predict?STATION='+ UserInputVal + '&DAY='+ Alldays + '&TIME='+ hoursVal);

    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:5000/predict?STATION='+ UserInputVal + '&DAY='+ Alldays + '&TIME='+ hoursVal,
      dataType: 'JSON',
      success: function(data) {
        Calling(data);
      }
    }); //end of AJAX call
//#searchSubmit end of click
});


console.log(long);







 });//end of document ready
