function addRequest() {
  createRequest();
  $("#content").val("");
}
function createRequest() {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/requests",
    // crossDomain: true,
    // xhrFields: {
    //   withCredentials: false
    // },
    // dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
        "content": "4ever"
    }),
    success: function (res) {
      console.log("Success!!!");
    },
    error: function (xhr, status, error) {
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
