// This script will take some LANDSAT 8 data, filter it down, and display it on a map

// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

// Set Indian Point lat/long as a point and then a feature
var ip_point = ee.Geometry.Point(-73.9513992,41.267997);
var ip_feat = ee.Feature(ip_point);

// Filter image collection to Indian Point using WRS Path/Row
// Use NASA's Earth Explorer to find path/row for each LANDSAT scene
var ip_image = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));

// Print list of metadata properties
var ip_properties = ip_image.propertyNames();
print('Metadata properties: ', ip_properties);

// Filter image collection to Spring 2016
var spring2016 = ip_image.filterDate('2016-03-01', '2016-06-01');

// Compute the median value of each pixel based on filtered collection
// Display RGB bands to visualize scene
var medianSpring16 = spring2016.median();
Map.setCenter(-73.9513992,41.267997,9);
Map.addLayer(medianSpring16,
  {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'medianSpring16');

// Add marker for Indian Point
Map.addLayer(ip_feat, {}, 'point');
