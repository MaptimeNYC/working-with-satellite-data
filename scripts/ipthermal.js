// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

// Filter image collection to Indian Point using WRS Path/Row
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));

  // Create buffer for analysis
  var geom = ee.Geometry.Point(-73.9513992,41.267997)
    .buffer(1000);
