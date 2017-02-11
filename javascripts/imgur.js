function saveToImgur(canvas){
  try {
      var imgUrl = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
  } catch(e) {
      var imgUrl = canvas.toDataURL().split(',')[1];
  }

  var clientId = "dd4cb70fd525bb9";

  $.ajax({
      url: "https://api.imgur.com/3/upload",
      type: "POST",
      datatype: "json",
      data: {image: imgUrl},
      success: showLink,
      error: showLink,
      beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
      }
  });
}

function showLink(data) {
  if(data.success == true) {
      $("#imgurLink").html("<a href='" + data.data.link + "'>" + data.data.link + "</a>");
  }
}
