var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zz_2 = new ol.format.GeoJSON();
var features_zz_2 = format_zz_2.readFeatures(json_zz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zz_2.addFeatures(features_zz_2);
var lyr_zz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zz_2, 
                style: style_zz_2,
                interactive: true,
                title: '<img src="styles/legend/zz_2.png" /> zz'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_zz_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenStreetMap_1,lyr_zz_2];
lyr_zz_2.set('fieldAliases', {'id': 'id', '포인트': '포인트', });
lyr_zz_2.set('fieldImages', {'id': '', '포인트': '', });
lyr_zz_2.set('fieldLabels', {'id': 'inline label', '포인트': 'inline label', });
lyr_zz_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});