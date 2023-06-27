import WheelComponent from "react-wheel-of-prizes";
import { Modal, Button, Container, Row, Col, ListGroup, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";

export default function SpinnerWheel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showWheel, setShowWheel] = useState(true);
    const [winner, setWinner] = useState("");

    const [colors, setColors] = useState(["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"]);
    // const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    const segColors = [
        "#FF0000",  // Red
        "#FF7F00",  // Orange
        "#FFFF00",  // Yellow
        "#7FFF00",  // Chartreuse Green
        "#00FF00",  // Lime
        "#00FF7F",  // Spring Green
        "#00FFFF",  // Aqua
        "#007FFF",  // Azure
        "#0000FF",  // Blue
        "#7F00FF",  // Violet
        "#FF00FF",  // Magenta
        "#FF007F"   // Rose
    ]
    const onFinished = (winnerStr) => {
        setWinner(winnerStr)
        handleShow()
        // console.log(winner);
    };

    const [arr, setArr] = useState([
        "逛街",
        "吃饭",
        "打游戏",
        "学习",
        "睡觉"
    ]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (event) => setInput(event.target.value);

    const handleAdd = () => {
        if (editIndex !== null) {
            const newArr = [...arr];
            newArr[editIndex] = input;
            setArr(newArr);
            setEditIndex(null);
        } else {
            const randomIndex = Math.floor(Math.random() * segColors.length);
            const randomColor = segColors[randomIndex];
            setColors([...colors, randomColor])
            setArr([...arr, input]);
        }
        setInput("");
        refreshWheel();
    };

    const handleEdit = (index) => {
        setInput(arr[index]);
        setEditIndex(index);
        refreshWheel();
    };

    const handleDelete = (index) => {
        setColors(colors.filter((_, i) => i !== index));
        setArr(arr.filter((_, i) => i !== index));
        refreshWheel();
    };

    const refreshWheel = () => {
        setShowWheel(false);
        setTimeout(() => {
            setShowWheel(true);
        }, 50);
    };

    return (
        <Container style={{ paddingTop: 100 }}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="输入内容"
                    value={input}
                    onChange={handleInputChange}
                />
                <Button variant="outline-secondary" onClick={handleAdd}>
                    {editIndex !== null ? "更新" : "添加"}
                </Button>
            </InputGroup>
            <ListGroup>
                {arr.map((str, index) => (
                    <ListGroup.Item key={index}>
                        {str}
                        <Button variant="danger" size="sm" onClick={() => handleDelete(index)} style={{ float: 'right' }}>
                            删除
                        </Button>
                        <Button variant="primary" size="sm" onClick={() => handleEdit(index)} style={{ float: 'right', marginRight: '10px' }}>
                            编辑
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {showWheel && <WheelComponent
                segments={arr}
                segColors={colors}
                onFinished={(winnerStr) => onFinished(winnerStr)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={false}
                size={250}
                upDuration={500}
                downDuration={600}
                fontFamily="Arial"
            />}

            {show &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>结果</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>选中了“{winner}”！</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            }

        </Container>
    );
}
