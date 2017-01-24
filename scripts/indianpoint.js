// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

// Set coordinates for Indian Point
var ip_point = ee.Geometry.Point(-73.9513992,41.267997);

/*
// Filter image collection to Indian Point using point
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filterBounds(ip_point);
print(ip_coll);
*/

// Filter image collection to Indian Point using WRS Path/Row
var ip_image = ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));

// Filter image collection to Spring 2016
var spring2016 = ip_image.filterDate('2016-03-01', '2016-06-01');
print(spring2016);

// Print list of metadata properties
var ip_properties = ip_image.propertyNames();
print('Metadata properties: ', ip_properties);

Map.addLayer(spring2016);
Map.setCenter(-73.9513992,41.267997);
