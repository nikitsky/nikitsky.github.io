function( options ){
    // Setup a callback function which gets called when chart zoomed or scrolled
    options.viewportChange = function (event, data) {
            // var detail = data;
            if(data['xMin']){
              var lDate = new Date(data['xMin']);
              apex.item('P30_START_DATE').setValue(apex.jQuery.datepicker.formatDate("dd-M-yy", lDate));
            }
            if(data['xMax']){
              var lDate = new Date(data['xMax'])
              apex.item('P30_END_DATE').setValue(apex.jQuery.datepicker.formatDate("dd-M-yy", lDate));
            }
            $("#chartSV_jet").ojChart(
              {title:
                {
                  text: 'Stock value chart: ' +
                    apex.jQuery.datepicker.formatDate("dd M yy", new Date(apex.item('P30_START_DATE').getValue())) +
                    ' - ' +
                    apex.jQuery.datepicker.formatDate("dd M yy", new Date(apex.item('P30_END_DATE').getValue())),
                  halign: 'center'
                  }
                });
            apex.region('tableSummary').refresh();
            //apex.jQuery('#tableSummary').trigger('apexrefresh');
        };

    options.whenReady = function(param) {
        // $("#chartSV_jet").ojChart({title: {text: 'Ready!'}});
        console.log('Ready!');

      };
    return options;
}

var lMinDate = new Date($("#chartSV_jet").ojChart("option", "xAxis.viewportMax"));
apex.item('P30_START_DATE').setValue(apex.jQuery.datepicker.formatDate("dd-M-yy", lMinDate));
var lMaxDate = new Date($("#chartSV_jet").ojChart("option", "xAxis.viewportMin"));
apex.item('P30_END_DATE').setValue(apex.jQuery.datepicker.formatDate("dd-M-yy", lMaxDate));