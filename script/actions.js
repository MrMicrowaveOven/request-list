function addRequest() {
  // console.log("FAAAAAIL");
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/requests",
    crossDomain: true,
    dataType: 'json',
    contentType: 'application/json',
    data: {
        "content": "4ever"
    },
    success: function (res) {
        console.log("Success!!!");
    },
    error: function (xhr, status, error) {
      // if (xhr.status === 403) {
      //   document.getElementById("response").innerHTML
      //     = "Sorry, ran out of pings for today :(";
      // } else {
      //   document.getElementById("response").innerHTML = "Error #" + xhr.status;
      // }
        console.log(error);
    }
  })
}
function getRequests() {
  var request_dates = [];
  $(".request_count").html("0 requests");

  requests.forEach(function(request) {
    request_dates.push(request.created_at)
  })
  request_dates.forEach(function(request_date) {
    $(".request_list").append("<div>" + request_date + "</div>")
  })
}
