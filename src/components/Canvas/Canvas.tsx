import React, {useMemo} from "react"
import "./Canvas.scss"
import {Canvas,} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Camera, Color} from "three";
import CustomTriangle from "../Triangle/Triangle";
import {useRef} from "react/index";
import Scene from "../Scene/Scene";
import {vec} from "../../types/vecTriangle";




type Props = {
    height:number,
    radius:number,
    segments:number,
    arrTriangle:vec[]
}

function CustomCanvas({
    height,
    radius,
    segments,
    arrTriangle
}:Props){

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