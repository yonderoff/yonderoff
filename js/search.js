var younderoff = younderoff || {};
var younderoff = {

  trailheadsurl: "http://yonderoff.cartodb.com/api/v2/sql",
  
  trailheadresults: function (data){
    var trailhead = [];
    for (e in data) {
      var trailname = feature[e].properties.trailname;
      var trailno = feature[e].properties.trailno;
      var areas = feature[e].properties.areas;
      trailhead.push({label: trailname, value: trailno, areas: areas});
  }
},

  searchtrailhead: function (val){
        var urlStr = younderoff.trailheadsurl+"?q=SELECT * FROM trailheads WHERE ='"+val+"'";

        $.ajax({
          url: urlStr,
          dataType: "jsonp",
          success: function (data){ },
          error:function(x,t,m){console.log('fail');}

        });
  }

};






