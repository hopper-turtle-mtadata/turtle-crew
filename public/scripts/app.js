
function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("UserInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("p");
      for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }

    var map, heatmap;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {
                lat: 40.739885,
                lng: -73.990082
            },
            mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: getPoints(),
            map: map
        });
    }

    function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
    }

    function changeGradient() {
        var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    }

    function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
    }

    function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
    }

    // function getWeight() {
    //     if score === 0 {
    //       return {weight: 20000}
    //     } else {
    //       return {weight: 10}
    //     }
    // }


    // Heatmap data: 500 Points
    function getPoints() {
        return [
            //queensboro plaza
            {
                location: new google.maps.LatLng(40.750582, -73.940202),
                weight: 20000
            },
            //lex ave
            {
                location: new google.maps.LatLng(40.763752777777775, -73.96662022222223),
                weight: 20
            },
            //59th st
            {
                location: new google.maps.LatLng(40.761514000000005, -73.97593179999998),
                weight: 10
            },
        ];
    }
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





 });//end of document ready
