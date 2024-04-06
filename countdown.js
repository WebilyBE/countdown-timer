// Set the countdown date
(function($) {
  "use strict";
  
  $.fn.countdown = function() {
    return this.each(function() {
      var countdownElements = $(this);
      
      countdownElements.each(function() {
        var element = $(this);
        var targetDate = new Date(element.data("date")).getTime();

        var countdownInterval = setInterval(function() {
          // Get the current time
          var now = new Date().getTime();

          // Find the distance between current time and the count down date
          var distance = targetDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the corresponding elements
          element.find('[data-days]').text(days < 10 ? '0' + days : days);
          element.find('[data-hours]').text(hours < 10 ? '0' + hours : hours);
          element.find('[data-minutes]').text(minutes < 10 ? '0' + minutes : minutes);
          element.find('[data-seconds]').text(seconds < 10 ? '0' + seconds : seconds);
          // If the count down is finished, clear the interval 
          if (distance < 0) {
            clearInterval(countdownInterval);
            element.find('[data-days]').text('0');
            element.find('[data-hours]').text('0');
            element.find('[data-minutes]').text('0');
            element.find('[data-seconds]').text('0');
          }
        }, 1000); // Refresh every second
      });
    });
  };
})(jQuery);
