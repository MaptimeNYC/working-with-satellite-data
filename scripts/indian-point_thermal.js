/*
 *  1.  Add satellite data to map
 */
Map.addLayer(
  //  add collection of raw Landsat8 data
  ee.ImageCollection('LANDSAT/LC8_L1T')
);

/*
 *  2.  Center map on Indian Point
 */
Map.setCenter(-73.954661, 41.269739, 15);

/*
 *  3.  Filter collection to useful data
 */
var indianPoint = ee.Geometry.Point(-73.954661, 41.269739);

var filteredCollection = ee.ImageCollection('LANDSAT/LC8_L1T')
  .filterBounds(indianPoint);

Map.addLayer(filteredCollection);
