define({
  root: ({
      descriptionlabel: "Use the measure tool below to draw a line on the map that you want to see the elevation profile for.",
      chartLabel: "Hover over or touch the Elevations Profile chart to display elevations and show location on map. This elevation data is derived from 30 metre resolution, satellite data. It should only be used as an indication of elevation/height.",
    clear: "Clear",
    measurelabel: "Measure",
    resultslabel: "Profile Result",
    profileinfo: "Profile Information",
    display: {
      elevationProfileTitle: "Elevation Profile",
      hoverOver: "Hover over or touch the Elevations Profile chart to display elevations and show location on map. This elevation data is derived from 30 metre resolution, satellite data. It should only be used as an indication of elevation/height."
    },
    chart: {
      title: "Elevation Profile",
      demResolution: "DEM Resolution",
      elevationTitleTemplate: "Elevation in {0}",
      distanceTitleTemplate: "Distance in {0}",
      gainLossTemplate: "Min: {min} Max: {max}<br>Start: {start} End: {end}<br>Change: {gainloss}"
    },
    errors: {
      InvalidConfiguration: "Invalid configuration.",
      UnableToProcessResults: "Unable to process analysis results."
    },
    widgetversion: 'Elevation Profile Widget Version Info',
    widgetverstr: 'Widget Version',
    wabversionmsg: 'Widget is designed to run in Web AppBuilder version'
  })
});
