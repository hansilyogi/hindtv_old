$(document).ready(function () {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  console.log(firstDay,lastDay);
  Month =
    firstDay.getMonth() + 1 < 10
      ? "0" + (firstDay.getMonth() + 1)
      : firstDay.getMonth() + 1;

  var firstDayWithSlashes =
    "0" + firstDay.getDate() + "/" + Month + "/" + firstDay.getFullYear();

  var lastDayWithSlashes =
    lastDay.getDate() + "/" + Month + "/" + lastDay.getFullYear();

  $.ajax({
    type: "POST",
    url: $("#website-url").attr("value") + "memo",
    data: {
      type: "singlememo",
      id: $(location).attr("href").split("=")[1],
      startdate: firstDayWithSlashes,
      enddate: lastDayWithSlashes,
    },
    dataType: "json",
    cache: false,
    success: function (data) {
      console.log(data);
      if (data.isSuccess == true) {
        $("#displaydata").html("");
        if (data.Data.length > 0) {
          //for (i = 0; i < data.Data.length; i++) {
          for(i = data.Data.length-1;i>0;i--){
            mess =
              data.Data[i].Type == "in" ? "You are late " : "You went early ";
            if (
              data.Data[i].ReasonSend == false ||
              data.Data[i].ReasonSend == undefined
            ) {
              $("#displaydata").append(
                `<div class="card text-center">
                  <div class="card-header">
                      Memo on ` +
                  data.Data[i].Date +
                  `
                  </div>
                  <div class="card-body" id="popup-` +
                  data.Data[i]._id +
                  `">
                      <h5 class="card-title mb-3">` +
                  mess +
                  Math.abs(data.Data[i].Hour) +
                  ` hrs ` +
                  Math.abs(data.Data[i].Minutes) +
                  ` min ` +
                  ` on ` +
                  data.Data[i].Date +
                  `</h5>
                      <textarea class="form-control" placeholder="Reason for coming late" id="reason-` +
                  data.Data[i]._id +
                  `" rows="2"></textarea>
                  <label class="text-danger" id="errorReason-` +
                  data.Data[i]._id +
                  `"><label>
                  </div>
                  <div class="card-footer text-muted"  id="button-` +
                  data.Data[i]._id +
                  `">
                      <button type="submit" class="btn btn-primary" id="btn-submit-request" data-id="` +
                  data.Data[i]._id +
                  `">Submit Request</button>
                  </div>
              </div>`
              );
            } else {
              $("#displaydata").append(
                `<div class="card text-center">
                  <div class="card-header">
                      Memo on ` +
                  data.Data[i].Date +
                  `
                  </div>
                  <div class="card-body" id="popup-` +
                  data.Data[i]._id +
                  `">
                      <h5 class="card-title mb-3">` +
                  mess +
                  Math.abs(data.Data[i].Hour) +
                  ` hrs ` +
                  Math.abs(data.Data[i].Minutes) +
                  ` min ` +
                  ` on ` +
                  data.Data[i].Date +
                  `</h5> ` +
                  `<br/><p class="ml-5">Reason: ` +
                  data.Data[i].Reason +
                  `</p>` +
                  `<p class="mt-1">Status: ` +
                  data.Data[i].Status +
                  `</p>
                  <div class=text-muted>
                  <p>You have submitted request for the memo.</p>
                  </div>
                  </div>`
              );
            }
          }
        }
      }
    },
  });

  $(document).on("click", "#btn-submit-request", function (e) {
    e.preventDefault();
    id = $(this).attr("data-id");
    val = validation(id);
    if (val == 1) {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "memo",
        data: {
          type: "requestmemo",
          id: id,
          reason: $("#reason-" + id).val(),
        },
        dataType: "json",
        cache: false,
        success: function (data) {
          if (data.isSuccess == true) {
            $("#popup-" + data.Data._id).html(
              `  <h5 class="card-title mb-3">` +
                mess +
                Math.abs(data.Data.Hour) +
                ` hrs ` +
                Math.abs(data.Data.Minutes) +
                ` min ` +
                ` on ` +
                data.Data.Date +
                `</h5> ` +
                `<p class="ml-5">Reason: ` +
                data.Data.Reason +
                `</p>` +
                `<p>Status: ` +
                data.Data.Status +
                `</p>`
            );
            $("#button-" + data.Data._id).html(
              "<p>You have submitted request for the memo.</p>"
            );
          }
        },
      });
    }
  });

  function validation(id) {
    val = 1;
    $("#errorReason-" + id).html("");
    if ($("#reason-" + id).val() == "") {
      $("#errorReason-" + id).html("Reason can't be empty");
      val = 0;
    }
    return val;
  }
});
