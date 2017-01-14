/*
 *  1.  Add satellite data to map
 */
Map.addLayer(
  //  add collection of raw Landsat8 data
  ee.ImageCollection('LANDSAT/LC8_L1T_8DAY_RAW');
);

/*
 *  2.  Center map on Indian Point
 */
Map.setCenter(-73.954661, 41.269739, 15);
