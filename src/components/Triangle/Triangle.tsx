import React, {useEffect, useMemo, useRef} from "react"
import {
    BufferGeometry,
    Color,
    EdgesGeometry,
    LineBasicMaterial,
    LineSegments,
    Mesh,
    MeshBasicMaterial,
    Vector3
} from "three";
import {useThree} from "@react-three/fiber";


type Vector = {
    x:number,
    y:number,
    z:number
}

type Props = {
    A:Vector,
    P:Vector,
    P1:Vector
}

type edgesProps = {
    geom:BufferGeometry
}

function Edges({geom}:edgesProps){
    const geometry = new EdgesGeometry( geom); // or WireframeGeometry
    const material = new LineBasicMaterial( { color: 0xffff00, linewidth: 2 } );



    return (
        <lineSegments geometry={geometry} material={material}></lineSegments>
    )
}

function CustomTriangle({
                            A,P,P1
}:Props){
    const meshRef = useRef<Mesh>(null!)


    const geom = useMemo(()=>{
        const vec1 = new Vector3(A.x,A.y,A.z)
        const vec2 = new Vector3(P.x,P.y,P.z)
        const vec3 = new Vector3(P1.x,P1.y,P1.z)

        return new BufferGeometry().setFromPoints([vec1, vec2, vec3]);
    },[A,P,P1])


    const mesh = useMemo(()=>{
        return new MeshBasicMaterial({color:new Color("#ad03fc")})
    },[])

    useEffect(()=>{
        if(meshRef.current){

        }
    },[meshRef,geom,mesh])

    return (
        <mesh ref={meshRef} geometry={geom} material={mesh}>
            <Edges geom={geom}></Edges>
        </mesh>
    )
}

export default CustomTriangle