import React, { Component, useEffect, useState } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import '../styles/MapContainer.css';

function MapComponent(locations) {
  // constructor() {
  //   super();
  //   this.map = {};
  // }
  const [map, setMap] = useState(null);
  useEffect(() => {
    AMapLoader.load({
      key: 'baf80b64f3b29ca5655dc11991bf2ca8', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.ToolBar', 'AMap.Driving', 'AMap.AutoComplete'],
      AMapUI: {
        version: "1.1",
        plugins: [],

      },
      Loca: {
        version: "2.0.0"
      }
    })
      .then(AMap => {
        var newMap = new AMap.Map('container', {
          // 设置地图容器id
          viewMode: '3D', // 是否为3D地图模式
          zoom: 5, // 初始化地图级别
          center: [105.602725, 37.076636], // 初始化地图中心点位置
        });

        // let positionArr = [
        //   [113.357224, 34.977186],
        //   [114.555528, 37.727903],
        //   [112.106257, 36.962733],
        //   [109.830097, 31.859027],
        //   [116.449181, 39.98614],
        // ];
        let positionArr = locations;
        console.log("this.props.locations");
        console.log(positionArr);
        for (let item of positionArr.locations) {
          let marker = new AMap.Marker({
            position: [item[0], item[1]],
          });
          newMap.add(marker);
        }
        setMap(newMap);

        // var autoOptions = {
        //   //city 限定城市，默认全国
        //   city: '全国'
        // };
        // // 实例化AutoComplete
        // var autoComplete = new AMap.AutoComplete(autoOptions);
        // // 根据关键字进行搜索
        // autoComplete.search("北京", function (status, result) {
        //   // 搜索成功时，result即是对应的匹配数据
        //   console.log("result:")
        //   console.log(result);
        // })

      })
      .catch(e => {
        console.log(e);
      });
  }, [])


  return (
    <div id="container" className="map" style={{ height: '800px' }}></div>
  );
}
// 导出地图组建类
export default MapComponent;

