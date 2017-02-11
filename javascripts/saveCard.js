$(document).ready(function() {
  $("#saveToCanvas").on("click", function() {
    html2canvas($(".hackentines-day-card-container")).then(function(canvas) {
      // document.body.appendChild(canvas);
      saveToImgur(canvas);
    });
  });
});
