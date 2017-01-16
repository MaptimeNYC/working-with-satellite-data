// Add Landsat8 image collection
var LC8_coll = ee.ImageCollection('LANDSAT/LC8_L1T');

// Set coordinates for Indian Point
var ip_point = ee.Geometry.Point(-73.9513992,41.267997);
