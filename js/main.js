/**
 * @description main javscript
 * @date 2020.2.21
 * @author 杯c咔+
 */


/**
 * @description main javscript init function 
 * @main
 *      it will be do some functions
 */
function mainJavascirptInit(){
    renderGisContainer();
}
mainJavascirptInit();

 /**
  *  @description render gis container,dom id like view
  */
 function renderGisContainer(){
    var viewer = new Cesium.Viewer('ceiusmCanvas', {
        imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
        }), 
        geocoder: false,              
        sceneModePicker: false,         
        navigationHelpButton: false,   
        baseLayerPicker: false,         
        homeButton: false,              
        fullscreenButton: false,        
        timeline: false,                 
        animation: false,                
    });
    viewer.cesiumWidget.creditContainer.style.display = "none";
 }