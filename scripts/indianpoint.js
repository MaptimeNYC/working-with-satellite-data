// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T');

// Set coordinates for Indian Point
var ip_point = ee.Geometry.Point(-73.9513992,41.267997);

/*
// Filter image collection to Indian Point using point
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T')
  .filterBounds(ip_point);
print(ip_coll);
*/

// Filter image collection to Indian Point using WRS Path/Row
var ip_coll = ee.ImageCollection('LANDSAT/LC8_L1T')
  .filter(ee.Filter.eq('WRS_PATH', 13))
  .filter(ee.Filter.eq('WRS_ROW', 31));
print(ip_coll);

Map.addLayer(ip_coll);
