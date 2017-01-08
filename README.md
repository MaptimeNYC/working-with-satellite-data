# Working w/Satellite Data  

##  What You'll Need
  1.  A Google Account
  2.  Sign Up as Google Earth Engine Developer  

##  About Satellite Data
- Brief History of Satellites
- Nature of Satellite Data
  - Resolution
  - Frequency
  - Bands
- Public Vs. Private Data Sources
- About Landsat Data

## Getting Data  
For this tutorial, we will be using the [Google Earth Engine](https://earthengine.google.com/) API to access Landsat datasets.  If you wanted to download satellite datasets for processing and visualization in GIS software, two good sources are [USGS Earth Explorer](https://earthexplorer.usgs.gov/) or [USGS National Map](https://viewer.nationalmap.gov/basic/?howTo=true).  

## Google Earth Engine  
- "Earth Engine is a platform for planetary-scale environmental data analysis."
- JS or Python  
- "Earth Engine may only be used for development, research, or educational purposes."  

## Using Landsat8's Thermal-Infrared (TIR) Sensors  
`Map.addLayer(ee.Image(''));
Map.setCenter(-73.953030, 41.267287);`  

## Using Landsat8 For Vegetation Analysis Over Time  

##  Resources / Tutorials  
- [Satellite Summit - Great summary of the state of satellite data](http://landscape.satsummit.io/#)
- [Landsat8 and Photoshop - Tom Patterson](http://www.shadedrelief.com/landsat8/introduction.html)  
- [Creating Web Map Shaded Relief - Tom Patterson](http://www.shadedrelief.com/web_relief/)
- [QGIS - Working with Raster Data](https://docs.qgis.org/2.6/en/docs/training_manual/rasters/data_manipulation.html)
