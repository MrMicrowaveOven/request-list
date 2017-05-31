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
  });
}
function getRequests() {
  var requestDates = [];

  requests.forEach(function(request) {
    requestDates.push(request.created_at);
  });
  requestDates.forEach(function(requestDate) {
    $(".request_list").append("<div>" + requestDate + "</div>");
  });

  var num_requests = $(".request_list")[0].children.length;

  $(".request_count").html(num_requests + " requests");
  if (num_requests == 1) {
    $(".request_count").html("1 request");
  }
}
