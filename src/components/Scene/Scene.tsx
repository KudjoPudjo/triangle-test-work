import React from "react"
import {Stage} from "@react-three/drei";
import {useThree} from "@react-three/fiber";



function Scene (){
    const camera = useThree(state => state.camera)
    
    return (
        <Stage></Stage>
    )
}

export default Scene