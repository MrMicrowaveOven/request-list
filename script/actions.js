function addRequest() {
  var requestContent = $("#content")[0].value;
  createRequest(requestContent);
  $("#content").val("");
}

function createRequest(requestContent) {
  $.ajax({
    type: "POST",
    url: "/requests",
    // crossDomain: true,
    // xhrFields: {
    //   withCredentials: false
    // },
    // dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      "content": requestContent
    }),
    success: function (requestDate) {
      $(".request_list").append("<div>" + requestDate + "</div>");
      updateRequestCount();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}

function getRequests() {
  $(".request_list").empty();
  $.ajax({
    type: "GET",
    url: "/requests",
    contentType: 'application/json',
    success: function (allRequests) {
      var requestDates = [];
      allRequests.forEach(function(request) {
        requestDates.push(request.created_at);
      });
      requestDates.forEach(function(requestDate) {
        $(".request_list").append("<div>" + requestDate + "</div>");
      });
      updateRequestCount();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}

function updateRequestCount() {
  var numRequests = $(".request_list")[0].children.length;
  $(".request_count").html(numRequests + " requests");
  if (numRequests === 1) {
    $(".request_count").html("1 request");
  }
}
