$("#carousel-button").click(function(){
      if ($("#carousel-button").children("span").hasClass('fa-pause')) {
          $("#mycarousel").carousel('pause');
          $("#carousel-button").children("span").removeClass('fa-pause');
          $("#carousel-button").children("span").addClass('fa-play');
      }
      else if ($("#carousel-button").children("span").hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $("#carousel-button").children("span").removeClass('fa-play');
          $("#carousel-button").children("span").addClass('fa-pause');
      }
  });


$("#toggleReserve").click(function(){
        $("#reserveModal").modal('toggle');

      });

$("#toggleLogin").click(function(){
        $("#loginModal").modal('toggle');

            });

$("#cancelLogin").click(function(){
        $("#loginModal").modal('hide');

            });

$("#closeLogin").click(function(){
              $("#loginModal").modal('hide');

            });

$("#cancelReserve").click(function(){
        $("#reserveModal").modal('hide');

            });


$("#closeReserve").click(function(){
      $("#reserveModal").modal('hide');

    });
