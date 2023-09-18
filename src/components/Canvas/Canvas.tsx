import React, {useMemo} from "react"
import "./Canvas.scss"
import {Canvas,} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Camera, Color} from "three";
import CustomTriangle from "../Triangle/Triangle";
import {useRef} from "react/index";
import Scene from "../Scene/Scene";


type cord  = {
    x:number,
    y:number,
    z:number
}

type vec = {
    A:cord,
    P:cord,
    P1:cord
}

type Props = {
    height:number,
    radius:number,
    segments:number
}

function CustomCanvas({
    height,
    radius,
    segments
}:Props){
    const arrTriangle = useMemo(()=>{
        let arr:vec[] = []
        if(height && radius && segments){
            for (let i = 0;i<segments;i++){
                arr.push({
                    A:{x:0,y:height,z:0},
                    P:{x:radius*Math.cos((2*Math.PI) * i/segments),y:0,z:radius * Math.sin((2*Math.PI)*i/segments)},
                    P1:{x:radius*Math.cos((2*Math.PI) * (i+1)/segments),y:0,z:radius * Math.sin((2*Math.PI)*(i+1)/segments)}
                })
            }
            return arr
        }else return arr
    },[height,radius,segments])
    return (
        <div id="canvas-container">
            <Canvas
                style={{height:"70vh"}}
            >
                <Scene></Scene>
                {arrTriangle !== undefined && arrTriangle.map((elem,id)=>{
                    return <CustomTriangle key={id} A={elem.A} P={elem.P} P1={elem.P1}></CustomTriangle>
                })}
                <ambientLight intensity={0.1} color={new Color("#fff")} />
                <OrbitControls keys={{
                    LEFT: 'KeyA', //left arrow
                    UP: 'KeyW', // up arrow
                    RIGHT: 'KeyD', // right arrow
                    BOTTOM: 'KeyS'
                }}></OrbitControls>
            </Canvas>
        </div>
    )
}


export default CustomCanvas