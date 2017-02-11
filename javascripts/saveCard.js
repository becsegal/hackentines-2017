/*
 * $(document).ready() is a helper function that waits until the jQuery library is fully loaded in your Browser before it tries to use it.
*/
$(document).ready(function() {
  $("#saveToCanvas").on("click", function() {
    html2canvas($(".hackentines-day-card-container")).then(function(canvas) {
      // document.body.appendChild(canvas);
      saveToImgur(canvas);
    });
  });
});
