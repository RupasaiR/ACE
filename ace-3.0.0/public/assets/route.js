$(document).ready(function () {
  $('#dist').on('click', function () {
    var src = $('#src');
    var dest = $('#dest');
    var s = src.val().replace(/\s/g, "");
    var d = dest.val().replace(/\s/g, "");
    var a = { src: s, dest: d };
    //var uri = `https://maps.googleapis.com/maps/api/directions/json?origin=${s}&destination=${d}&alternatives=true&key=AIzaSyDUA7HInId-aYWjxMz_U1MjeyCTPDlV_5I`;
    $.ajax({
      type: 'POST',
      url: '/dist',
      data: a,
      success: function (data) {
        alert('success');
        window.location = "http://localhost:3000/polyline";
      },
      error: function () {
        alert('failure');
      }
    });
    return false;
  });
  $('#crime').on('click', function () {
    var src = $('#src');
    var dest = $('#dest');
    var s = src.val().replace(/\s/g, "");
    var d = dest.val().replace(/\s/g, "");
    var a = { src: s, dest: d };
    //var uri = `https://maps.googleapis.com/maps/api/directions/json?origin=${s}&destination=${d}&alternatives=true&key=AIzaSyDUA7HInId-aYWjxMz_U1MjeyCTPDlV_5I`;
    $.ajax({
      type: 'POST',
      url: '/crime',
      data: a,
      success: function (data) {
        alert('success');
        window.location = "http://localhost:3000/polyline";
      },
      error: function () {
        alert('failure');
      }
    });
    return false;
  });
});
