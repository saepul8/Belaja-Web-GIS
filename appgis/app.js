 //Point
 //'https://opendata.arcgis.com/datasets/0c0f4558f1e548b68a1c82112744bad3_0.geojson'

 var vectorLayer = new ol.layer.Vector({
     source: new ol.source.Vector({
         url: 'https://opendata.arcgis.com/datasets/0c0f4558f1e548b68a1c82112744bad3_0.geojson',
         format: new ol.format.GeoJSON()
     })
 });


 var map = new ol.Map({
     target: 'map',
     layers: [new ol.layer.Tile({
         source: new ol.source.OSM()
     }), vectorLayer],
     view: new ol.View({
         //projection: 'EPSG:4326',
         center: ol.proj.fromLonLat([114, 0]),
         zoom: 4
     })
 });

 map.on('pointermove', function(e) {
     $('#coordinate').html(e.coordinate.toString().replace(' ', ','));
 });