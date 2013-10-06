var QuickSearch = QuickSearch || {};
var QuickSearch = {

  trailheadsurl: "http://yonderoff.cartodb.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM trailheads LIMIT 10000",
  
  trailheadresults: function (data){
    var trailhead = [];
    for (e in data) {
      var trailname = feature[e].properties.trailname;
      var trailno = feature[e].properties.trailno;
      var areas = feature[e].properties.areas;
      trailhead.push({label: trailname, value: trailno, areas: areas});
  }
},

  searchtrailhead: function (){
        var urlStr = QuickSearch.trailheadsurl;

        $.ajax({
          url: urlStr,
          dataType: "jsonp",
          success: function (data){ return urlStr;},
          error:function(x,t,m){console.log('fail');}

        });
  }

};






