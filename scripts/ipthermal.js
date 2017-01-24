// This script takes the Indian Point scene and looks for thermal hotspots

// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

// Set Indian Point lat/long as a point and then a feature
var ip_point = ee.Geometry.Point(-73.9513992,41.267997);
var ip_feat = ee.Feature(ip_point);

// Filter image collection to Indian Point using WRS Path/Row
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));

// Filter image collection to Spring 2016
  var spring2016 = ip_coll.filterDate('2016-03-01', '2016-06-01');

// Based on https://developers.google.com/earth-engine/image_objects
// Compute the median value of each pixel based on filtered collection
// Display thermal band 10 to visualize scene
var medianSpring16 = spring2016.median();

Map.setCenter(-73.9513992,41.267997,9);
Map.addLayer(medianSpring16,
  {bands: ['B10'], min: 270, max: 310});

// Add marker for Indian Point
Map.addLayer(ip_feat, {}, 'point');

// Threshold the thermal band to find "hot" objects
var hotspots = medianSpring16.select('B10').gt(290);

// Mask "cold" pixels and add layer to Map
hotspots = hotspots.updateMask(hotspots);
Map.addLayer(hotspots, {palette: 'FF0000'}, 'hotspots');

// Next steps to visualize thermal plumes in water
// 1. Mask out land
// 2. Re-run analysis only using water only (not entire scene)
