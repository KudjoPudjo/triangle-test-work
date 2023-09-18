import React, {useState} from 'react';
import './App.css';
import Input from "./components/Input/Inpurt";
import Button from "./components/Button/Button";
import CustomCanvas from "./components/Canvas/Canvas";
import {useThree} from "@react-three/fiber";

function App() {
    const [height,setHeight] = useState(0)
    const [radius,setRadius] = useState(0)
    const [segments,setSegments] = useState(0)


    const sendData = ():void=>{
        
    }

    return (
    <div className="App">
        <div className={"data-wrap"}>
        <Input value={height} onChange={(event)=>{setHeight(Number(event.currentTarget.value))}}  type="number" label={"Cone height"}></Input>
        <Input value={radius} type="number"  onChange={(event)=>{setRadius(Number(event.currentTarget.value))}} label={"Radius"}></Input>
        <Input value={segments} type="number" onChange={(event)=>{setSegments(Number(event.currentTarget.value))}} label={"Number of segments on a circle"}></Input>
        </div>
        <Button onClick={sendData}>
            Compute triangulation
        </Button>
        <CustomCanvas height={height} radius={radius} segments={segments} ></CustomCanvas>
    </div>
    );
}

export default App;
