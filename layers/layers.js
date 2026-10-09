var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SebaranATSKotaKupang_1 = new ol.format.GeoJSON();
var features_SebaranATSKotaKupang_1 = format_SebaranATSKotaKupang_1.readFeatures(json_SebaranATSKotaKupang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranATSKotaKupang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranATSKotaKupang_1.addFeatures(features_SebaranATSKotaKupang_1);
var lyr_SebaranATSKotaKupang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranATSKotaKupang_1, 
                style: style_SebaranATSKotaKupang_1,
                popuplayertitle: 'Sebaran ATS Kota Kupang',
                interactive: true,
    title: 'Sebaran ATS Kota Kupang<br />\
    <img src="styles/legend/SebaranATSKotaKupang_1_0.png" /> Rendah<br />\
    <img src="styles/legend/SebaranATSKotaKupang_1_1.png" /> Sedang<br />\
    <img src="styles/legend/SebaranATSKotaKupang_1_2.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_SebaranATSKotaKupang_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SebaranATSKotaKupang_1];
lyr_SebaranATSKotaKupang_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'Kelurahan', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'Luas Wilayah', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'Kecamantan', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ATS Kecamatan-Kelurahan_No': 'ATS Kecamatan-Kelurahan_No', 'ATS Kecamatan-Kelurahan_Kecamatan': 'ATS Kecamatan-Kelurahan_Kecamatan', 'ATS Kecamatan-Kelurahan_Jumlah_BPB': 'BPB', 'ATS Kecamatan-Kelurahan_Kel_A': 'ATS Kecamatan-Kelurahan_Kel_A', 'ATS Kecamatan-Kelurahan_Kel_B': 'ATS Kecamatan-Kelurahan_Kel_B', 'ATS Kecamatan-Kelurahan_KB': 'ATS Kecamatan-Kelurahan_KB', 'ATS Kecamatan-Kelurahan_TPA': 'ATS Kecamatan-Kelurahan_TPA', 'ATS Kecamatan-Kelurahan_SPS': 'ATS Kecamatan-Kelurahan_SPS', 'ATS Kecamatan-Kelurahan_1': 'ATS Kecamatan-Kelurahan_1', 'ATS Kecamatan-Kelurahan_2': 'ATS Kecamatan-Kelurahan_2', 'ATS Kecamatan-Kelurahan_3': 'ATS Kecamatan-Kelurahan_3', 'ATS Kecamatan-Kelurahan_4': 'ATS Kecamatan-Kelurahan_4', 'ATS Kecamatan-Kelurahan_5': 'ATS Kecamatan-Kelurahan_5', 'ATS Kecamatan-Kelurahan_6': 'ATS Kecamatan-Kelurahan_6', 'ATS Kecamatan-Kelurahan_7': 'ATS Kecamatan-Kelurahan_7', 'ATS Kecamatan-Kelurahan_8': 'ATS Kecamatan-Kelurahan_8', 'ATS Kecamatan-Kelurahan_9': 'ATS Kecamatan-Kelurahan_9', 'ATS Kecamatan-Kelurahan_10': 'ATS Kecamatan-Kelurahan_10', 'ATS Kecamatan-Kelurahan_11': 'ATS Kecamatan-Kelurahan_11', 'ATS Kecamatan-Kelurahan_12': 'ATS Kecamatan-Kelurahan_12', 'ATS Kecamatan-Kelurahan_13': 'ATS Kecamatan-Kelurahan_13', 'ATS Kecamatan-Kelurahan_Jumlah_DO': 'DO', 'ATS Kecamatan-Kelurahan_6_1': 'ATS Kecamatan-Kelurahan_6_1', 'ATS Kecamatan-Kelurahan_9_1': 'ATS Kecamatan-Kelurahan_9_1', 'ATS Kecamatan-Kelurahan_Jumlah_LTM': 'LTM', 'ATS Kecamatan-Kelurahan_Total': 'Total', });
lyr_SebaranATSKotaKupang_1.set('fieldImages', {'fid': 'Hidden', 'KDPPUM': 'Hidden', 'NAMOBJ': 'TextEdit', 'REMARK': 'Hidden', 'KDPBPS': 'Hidden', 'FCODE': 'Hidden', 'LUASWH': 'TextEdit', 'UUPP': 'Hidden', 'SRS_ID': 'Hidden', 'LCODE': 'Hidden', 'METADATA': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDBBPS': 'Hidden', 'KDBPUM': 'Hidden', 'WADMKD': 'Hidden', 'WIADKD': 'Hidden', 'WADMKC': 'TextEdit', 'WIADKC': 'Hidden', 'WADMKK': 'Hidden', 'WIADKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADPR': 'Hidden', 'TIPADM': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'ATS Kecamatan-Kelurahan_No': 'Hidden', 'ATS Kecamatan-Kelurahan_Kecamatan': 'Hidden', 'ATS Kecamatan-Kelurahan_Jumlah_BPB': 'Range', 'ATS Kecamatan-Kelurahan_Kel_A': 'Hidden', 'ATS Kecamatan-Kelurahan_Kel_B': 'Hidden', 'ATS Kecamatan-Kelurahan_KB': 'Hidden', 'ATS Kecamatan-Kelurahan_TPA': 'Hidden', 'ATS Kecamatan-Kelurahan_SPS': 'Hidden', 'ATS Kecamatan-Kelurahan_1': 'Hidden', 'ATS Kecamatan-Kelurahan_2': 'Hidden', 'ATS Kecamatan-Kelurahan_3': 'Hidden', 'ATS Kecamatan-Kelurahan_4': 'Hidden', 'ATS Kecamatan-Kelurahan_5': 'Hidden', 'ATS Kecamatan-Kelurahan_6': 'Hidden', 'ATS Kecamatan-Kelurahan_7': 'Hidden', 'ATS Kecamatan-Kelurahan_8': 'Hidden', 'ATS Kecamatan-Kelurahan_9': 'Hidden', 'ATS Kecamatan-Kelurahan_10': 'Hidden', 'ATS Kecamatan-Kelurahan_11': 'Hidden', 'ATS Kecamatan-Kelurahan_12': 'Hidden', 'ATS Kecamatan-Kelurahan_13': 'Hidden', 'ATS Kecamatan-Kelurahan_Jumlah_DO': 'Range', 'ATS Kecamatan-Kelurahan_6_1': 'Hidden', 'ATS Kecamatan-Kelurahan_9_1': 'Hidden', 'ATS Kecamatan-Kelurahan_Jumlah_LTM': 'Range', 'ATS Kecamatan-Kelurahan_Total': 'Range', });
lyr_SebaranATSKotaKupang_1.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'LUASWH': 'hidden field', 'WADMKC': 'inline label - always visible', 'ATS Kecamatan-Kelurahan_Jumlah_BPB': 'inline label - visible with data', 'ATS Kecamatan-Kelurahan_Jumlah_DO': 'inline label - visible with data', 'ATS Kecamatan-Kelurahan_Jumlah_LTM': 'inline label - visible with data', 'ATS Kecamatan-Kelurahan_Total': 'inline label - visible with data', });
lyr_SebaranATSKotaKupang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});