
$(function () {

  $('#stations').keyup(()=>{
    $.ajax({
      url: 'station',
      method: 'POST',
      data: {station: $("#stations").val()},
      success: data => {
        $(".drop").text(data.station);
      }, error: err => {
        console.log("err", err);
      }
    })
  });
// Dropdown ends


 console.log('yo b');
     // Step 3. Create a data object
     var data = {
         labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         datasets: [
             {
                 label: "The First Dataset",
                 fillColor: "rgba(153,0,76,0.2)", // magenta
                 strokeColor: "rgba(153,0,76,1)", // magenta
                 pointColor: "rgba(153,0,76,1)", // magenta
                 pointStrokeColor: "#fff", // white
                 pointHighlightFill: "#fff", // white
                 pointHighlightStroke: "rgba(153,0,76,1)", // magenta
                 data: [100, 34, 21, 56, 23, 90, 40]
             },
             {
                 label: "The Second dataset",
                 fillColor: "rgba(76,0,153,0.2)",
                 strokeColor: "rgba(76,0,153,1)",
                 pointColor: "rgba(76,0,153,1)",
                 pointStrokeColor: "#fff", // white
                 pointHighlightFill: "#fff", // white
                 pointHighlightStroke: "rgba(76,0,153,1)",
                 data: [28, 48, 40, 19, 86, 27, 90]
             }
         ]
     };
   var option = {
     ///Boolean - Whether grid lines are shown across the chart
     scaleShowGridLines : true,

     //String - Colour of the grid lines
     scaleGridLineColor : "rgba(0,0,0,.05)",

     //Number - Width of the grid lines
     scaleGridLineWidth : 1,

     //Boolean - Whether to show horizontal lines (except X axis)
     scaleShowHorizontalLines: true,

     //Boolean - Whether to show vertical lines (except Y axis)
     scaleShowVerticalLines: true,

     //Boolean - Whether the line is curved between points
     bezierCurve : true,

     //Number - Tension of the bezier curve between points
     bezierCurveTension : 0.4,

     //Boolean - Whether to show a dot for each point
     pointDot : true,

     //Number - Radius of each point dot in pixels
     pointDotRadius : 4,

     //Number - Pixel width of point dot stroke
     pointDotStrokeWidth : 1,

     //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
     pointHitDetectionRadius : 20,

     //Boolean - Whether to show a stroke for datasets
     datasetStroke : true,

     //Number - Pixel width of dataset stroke
     datasetStrokeWidth : 2,

     //Boolean - Whether to fill the dataset with a colour
     datasetFill : true,
 };

     // Step 2. Get the context of the canvas element we want to select
     var ctx = document.getElementById("myChart").getContext("2d");
     var myNewChart = new Chart(ctx).Line(data, option);





















 });//end of document ready
=======
$(function() {
      console.log('yo b');
      // Step 3. Create a data object


              //start of ajax call

              $.ajax({
              method: 'GET',
              url: 'api/mta' + $('#mtaInput').val(),
              success: response => {
                  // console.log(response);
                  response.forEach((response) => {

                      handleResponse(response);
                  });
              },
              error: msg => {
                  console.log(msg);
              }
          }); //end of ajx call
      }); //end of submit form
// getting responses from the "API" and appending them to the dom. after the on click.
      const handleResponse = function(response) {
          const sid = response.id;
          const name = response.name;


          var data = {
            labels: [sid, name],
            datasets: [{
                label: "The First Dataset",
                fillColor: "rgba(153,0,76,0.2)", // magenta
                strokeColor: "rgba(153,0,76,1)", // magenta
                pointColor: "rgba(153,0,76,1)", // magenta
                pointStrokeColor: "#fff", // white
                pointHighlightFill: "#fff", // white
                pointHighlightStroke: "rgba(153,0,76,1)", // magenta
                data: [100, 34, 21, 56, 23, 90, 40]
              },
              {
                label: "The Second dataset",
                fillColor: "rgba(76,0,153,0.2)",
                strokeColor: "rgba(76,0,153,1)",
                pointColor: "rgba(76,0,153,1)",
                pointStrokeColor: "#fff", // white
                pointHighlightFill: "#fff", // white
                pointHighlightStroke: "rgba(76,0,153,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          };
          var option = {
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,
          };

          // Step 2. Get the context of the canvas element we want to select
          var ctx = document.getElementById("myChart").getContext("2d");
          var myNewChart = new Chart(ctx).Line(data, option);

          appendStation(sid, name);
          // console.log(comments);
      }; //end of handle responses





      const appendStation = function(sid, name) {
          const $gameL = $('#stationList');
          const $stationDiv = $('<div class="station-div" id= ' + sid + '>');
          const $stationId = $('<p>' + gid + '</p>');
          const $newName = $('<h2 class="mtaHead">' + name + '</h2>');


          // save button that saves users games to their wishlist
          const $newButton = $('<button  id="blogin" class = "saveButton">').on('click', function(e) {
              // console.log(e)
              let m = $(e.target).parent();
              let children = m.children();
              let name = $(children[0]).text(),
                  sid2 = $(children[1]).text(),


              const newGameData = { sid: sid2, name: name };
              // console.log(newGameData);
              $.ajax({
                  method: 'POST',
                  url: '/api/mta',
                  data: newGameData,
                  success: response => {
                      // console.log(response.user_id);
                      // console.log(repo)
                      window.location.replace('/show/');
                  },
                  error: function(error) {
                      // console.log('error on line 108');
                  }
              }); //end of post ajax call

          }); //end of save button click method.
          // console.log($newButton);
          $newButton.text('Save');
          $stationId.css('display', 'none');
          $stationDiv.append($newName);
          $stationDiv.append($stationId);

          $stationDiv.append($newButton);
          $('article').append($stationDiv);

      }; //end of append game

      $('.deleteGame').on('click', function(e) {
          // console.log(e);
          // console.log('inside delete game');
          const stationId = $(this).data('id');
          // console.log(gameId);
          $.ajax({
              method: 'DELETE',
              url: '/api/mta/' + stationId,
              success: response => {
                  // console.log('success');
                  // console.log("==" + $(this).user_id);
                  console.log(response);
                  window.location.replace('/games/saved/' + response.user_id);
              },
              error: msg => {
                  console.log('error', msg)
              }
          }); // ends ajax method
      }); // end of delete form


            }); //end of document ready

