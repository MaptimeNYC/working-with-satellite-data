// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

// Filter image collection to Indian Point using WRS Path/Row
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));

// Filter image collection to Spring 2016
  var spring2016 = ip_coll.filterDate('2016-03-01', '2016-06-01');

// Compute the median value of each pixel based on filtered collection
// Display thermal to visualize scene
  var medianSpring16 = spring2016.median();

  Map.setCenter(-73.9513992,41.267997,9);
  Map.addLayer(medianSpring16,
      {bands: ['B10'], min: 270, max: 310});
