import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Travel } from '../Object/Travel';
import { AutoComplete } from 'antd';
import AMapLoader from '@amap/amap-jsapi-loader';
import { uploadFile } from '../api/StorageFile';

function Upload() {
    const [travel, setTravel] = useState(new Travel());
    const [previewImg, setPreviewImg] = useState(null);

    const handleItemImageChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 9) {
            alert('You can only upload up to 9 images.');
            return;
        }
        const selectedImages = files.slice(0, 9);
        // const imagePreviews = selectedImages.map((image) => URL.createObjectURL(image));
        setPreviewImg(selectedImages);
        // console.log(imagePreviews);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTravel((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);
    const onSelect = (value, option) => {
        console.log('onSelect', value, option);
        setSelectedOption(option);
        setTravel((prev) => ({
            ...prev,
            title: value
        }));
    };

    const [results, setResults] = useState(null);
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

                // var newMap = new AMap.Map('container', {
                //   // 设置地图容器id
                //   viewMode: '3D', // 是否为3D地图模式
                //   zoom: 5, // 初始化地图级别
                //   center: [105.602725, 37.076636], // 初始化地图中心点位置
                // });

                // let positionArr = [
                //   [113.357224, 34.977186],
                //   [114.555528, 37.727903],
                //   [112.106257, 36.962733],
                //   [109.830097, 31.859027],
                //   [116.449181, 39.98614],
                // ];
                // for (let item of positionArr) {
                //     let marker = new AMap.Marker({
                //         position: [item[0], item[1]],
                //     });
                //     newMap.add(marker);
                // }
                // setMap(newMap);

                var autoOptions = {
                    //city 限定城市，默认全国
                    city: '全国'
                };
                // 实例化AutoComplete
                var autoComplete = new AMap.AutoComplete(autoOptions);
                // 根据关键字进行搜索
                setMap(autoComplete);
            })
            .catch(e => {
                console.log(e);
            });
    }, [])

    const searchLocation = (value) => {
        if (map === null || value === "") {
            return;
        }
        console.log("开始搜索")
        map.search(value, function (status, result) {
            // 搜索成功时，result即是对应的匹配数据
            console.log("result:")
            console.log(result);
            setResults(result);
            var optionsArr = [];
            for (let i = 0; i < result.tips.length; i++) {
                const newOption = {
                    value: result.tips[i].name,
                    location: [result.tips[i].location.lng, result.tips[i].location.lat]
                }
                optionsArr.push(newOption);
            }
            setOptions(optionsArr);
        })
    }

    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        await uploadFile("Travels", `${travel.id}/0.png`, previewImg[0]);
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // setValidated(true);

    };

    return (
        <Container style={{ paddingTop: 100 }} >
            {previewImg && <div className="preview-images" style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
                {previewImg.map((image, index) => (
                    <div key={index} className="preview-image" style={{ marginRight: '10px' }}>
                        <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} style={{ width: '200px' }} />
                    </div>
                ))}
            </div>
            }
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>添加图片</Form.Label>
                    <div className="image-upload">
                        <Form.Control type="file" accept="image/*" multiple onChange={handleItemImageChange} required />
                    </div>
                </Form.Group>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>名称</Form.Label>
                    <AutoComplete
                        options={options}
                        style={{
                            width: 200,
                        }}
                        onSelect={onSelect}
                        onSearch={(text) => searchLocation(text)}
                        placeholder="地点"
                    />
                    {/* <Form.Control type="text" name="title" value={travel.title} onChange={handleInputChange} placeholder="填写名称" required /> */}
                </Form.Group>
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>副标题</Form.Label>
                    <Form.Control type="text" name="description" value={travel.description} onChange={handleInputChange} placeholder="填写副标题" required />
                </Form.Group>

                <Button type="submit">上传</Button>
            </Form>

        </Container>
    );
}

export default Upload;