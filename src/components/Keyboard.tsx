/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import KeyButton from "./KeyButton";
type GLTFResult = GLTF & {
  nodes: {
    ControlLeft001: THREE.Mesh;
    AltLeft: THREE.Mesh;
    AltRight: THREE.Mesh;
    ArrowDown: THREE.Mesh;
    ArrowLeft: THREE.Mesh;
    ArrowRight: THREE.Mesh;
    ArrowUp: THREE.Mesh;
    Backslash: THREE.Mesh;
    Backspace: THREE.Mesh;
    BracketLeft: THREE.Mesh;
    BracketRight: THREE.Mesh;
    CapsLock: THREE.Mesh;
    Comma: THREE.Mesh;
    ControlRight: THREE.Mesh;
    ControlLeft: THREE.Mesh;
    Digit0: THREE.Mesh;
    Digit1: THREE.Mesh;
    Digit2: THREE.Mesh;
    Digit3: THREE.Mesh;
    Digit4: THREE.Mesh;
    Digit5: THREE.Mesh;
    Digit6: THREE.Mesh;
    Digit7: THREE.Mesh;
    Digit8: THREE.Mesh;
    Digit9: THREE.Mesh;
    Enter: THREE.Mesh;
    Equal: THREE.Mesh;
    Escape: THREE.Mesh;
    Fn: THREE.Mesh;
    KeyA: THREE.Mesh;
    KeyB: THREE.Mesh;
    KeyC: THREE.Mesh;
    KeyD: THREE.Mesh;
    KeyE: THREE.Mesh;
    KeyF: THREE.Mesh;
    KeyG: THREE.Mesh;
    KeyH: THREE.Mesh;
    KeyI: THREE.Mesh;
    KeyJ: THREE.Mesh;
    KeyK: THREE.Mesh;
    KeyL: THREE.Mesh;
    KeyM: THREE.Mesh;
    KeyN: THREE.Mesh;
    KeyO: THREE.Mesh;
    KeyP: THREE.Mesh;
    KeyQ: THREE.Mesh;
    KeyR: THREE.Mesh;
    KeyS: THREE.Mesh;
    KeyT: THREE.Mesh;
    KeyU: THREE.Mesh;
    KeyV: THREE.Mesh;
    KeyW: THREE.Mesh;
    KeyX: THREE.Mesh;
    KeyY: THREE.Mesh;
    KeyZ: THREE.Mesh;
    Minus: THREE.Mesh;
    OSLeft: THREE.Mesh;
    Period: THREE.Mesh;
    Quote: THREE.Mesh;
    Semicolon: THREE.Mesh;
    ShiftLeft: THREE.Mesh;
    ShiftRight: THREE.Mesh;
    Slash: THREE.Mesh;
    Space: THREE.Mesh;
    Tab: THREE.Mesh;
  };
  materials: {
    ["computer material"]: THREE.MeshStandardMaterial;
    ["Computer material 2"]: THREE.MeshStandardMaterial;
  };
};

export function Keyboard(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3dModels/keyboard.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <KeyButton
          name="ControlLeft001"
          geometry={nodes.ControlLeft001.geometry}
          material={materials["computer material"]}

          rotation={[0, 0.5, 0]}
        >
          <KeyButton
            name="AltLeft"
            geometry={nodes.AltLeft.geometry}
            material={materials["Computer material 2"]}
            position={[0.154, 0.031, 0.66]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="AltRight"
            geometry={nodes.AltRight.geometry}
            material={materials["Computer material 2"]}
            position={[0.573, 0.031, -0.105]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ArrowDown"
            geometry={nodes.ArrowDown.geometry}
            material={nodes.ArrowDown.material}
            position={[0.814, 0.031, -0.487]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ArrowLeft"
            geometry={nodes.ArrowLeft.geometry}
            material={nodes.ArrowLeft.material}
            position={[0.744, 0.031, -0.359]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ArrowRight"
            geometry={nodes.ArrowRight.geometry}
            material={nodes.ArrowRight.material}
            position={[0.884, 0.031, -0.614]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ArrowUp"
            geometry={nodes.ArrowUp.geometry}
            material={nodes.ArrowUp.material}
            position={[0.752, 0.031, -0.521]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Backslash"
            geometry={nodes.Backslash.geometry}
            material={nodes.Backslash.material}
            position={[0.473, 0.031, -0.91]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Backspace"
            geometry={nodes.Backspace.geometry}
            material={nodes.Backspace.material}
            position={[0.32, 0.031, -0.947]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="BracketLeft"
            geometry={nodes.BracketLeft.geometry}
            material={nodes.BracketLeft.material}
            position={[0.331, 0.031, -0.65]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="BracketRight"
            geometry={nodes.BracketRight.geometry}
            material={nodes.BracketRight.material}
            position={[0.403, 0.031, -0.781]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="CapsLock"
            geometry={nodes.CapsLock.geometry}
            material={nodes.CapsLock.material}
            position={[-0.318, 0.031, 0.869]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Comma"
            geometry={nodes.Comma.geometry}
            material={materials["Computer material 2"]}
            position={[0.436, 0.031, -0.188]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ControlRight"
            geometry={nodes.ControlRight.geometry}
            material={materials["Computer material 2"]}
            position={[0.645, 0.031, -0.236]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ControlLeft"
            geometry={nodes.ControlLeft.geometry}
            material={materials["Computer material 2"]}
            position={[-0.06, 0.031, 1.052]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit0"
            geometry={nodes.Digit0.geometry}
            material={nodes.Digit0.material}
            position={[0.104, 0.032, -0.555]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit1"
            geometry={nodes.Digit1.geometry}
            material={nodes.Digit1.material}
            position={[-0.538, 0.032, 0.623]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit2"
            geometry={nodes.Digit2.geometry}
            material={nodes.Digit2.material}
            position={[-0.466, 0.032, 0.492]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit3"
            geometry={nodes.Digit3.geometry}
            material={nodes.Digit3.material}
            position={[-0.395, 0.032, 0.361]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit4"
            geometry={nodes.Digit4.geometry}
            material={nodes.Digit4.material}
            position={[-0.324, 0.032, 0.231]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit5"
            geometry={nodes.Digit5.geometry}
            material={nodes.Digit5.material}
            position={[-0.252, 0.032, 0.1]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit6"
            geometry={nodes.Digit6.geometry}
            material={nodes.Digit6.material}
            position={[-0.181, 0.032, -0.031]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit7"
            geometry={nodes.Digit7.geometry}
            material={nodes.Digit7.material}
            position={[-0.11, 0.032, -0.162]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit8"
            geometry={nodes.Digit8.geometry}
            material={nodes.Digit8.material}
            position={[-0.038, 0.032, -0.293]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Digit9"
            geometry={nodes.Digit9.geometry}
            material={nodes.Digit9.material}
            position={[0.033, 0.032, -0.424]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Enter"
            geometry={nodes.Enter.geometry}
            material={nodes.Enter.material}
            position={[0.581, 0.009, -0.773]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Equal"
            geometry={nodes.Equal.geometry}
            material={nodes.Equal.material}
            position={[0.25, 0.031, -0.82]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Escape"
            geometry={nodes.Escape.geometry}
            material={nodes.Escape.material}
            position={[-0.609, 0.032, 0.754]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Fn"
            geometry={nodes.Fn.geometry}
            material={materials["Computer material 2"]}
            position={[0.011, 0.031, 0.921]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyA"
            geometry={nodes.KeyA.geometry}
            material={nodes.KeyA.material}
            position={[-0.228, 0.031, 0.7]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyB"
            geometry={nodes.KeyB.geometry}
            material={materials["Computer material 2"]}
            position={[0.222, 0.031, 0.205]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyC"
            geometry={nodes.KeyC.geometry}
            material={materials["Computer material 2"]}
            position={[0.079, 0.031, 0.467]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyD"
            geometry={nodes.KeyD.geometry}
            material={nodes.KeyD.material}
            position={[-0.085, 0.031, 0.438]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyE"
            geometry={nodes.KeyE.geometry}
            material={nodes.KeyE.material}
            position={[-0.239, 0.031, 0.397]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyF"
            geometry={nodes.KeyF.geometry}
            material={nodes.KeyF.material}
            position={[-0.014, 0.031, 0.307]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyG"
            geometry={nodes.KeyG.geometry}
            material={nodes.KeyG.material}
            position={[0.057, 0.031, 0.177]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyH"
            geometry={nodes.KeyH.geometry}
            material={nodes.KeyH.material}
            position={[0.129, 0.031, 0.046]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyI"
            geometry={nodes.KeyI.geometry}
            material={nodes.KeyI.material}
            position={[0.117, 0.031, -0.257]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyJ"
            geometry={nodes.KeyJ.geometry}
            material={nodes.KeyJ.material}
            position={[0.2, 0.031, -0.085]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyK"
            geometry={nodes.KeyK.geometry}
            material={nodes.KeyK.material}
            position={[0.271, 0.031, -0.216]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyL"
            geometry={nodes.KeyL.geometry}
            material={nodes.KeyL.material}
            position={[0.343, 0.031, -0.347]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyM"
            geometry={nodes.KeyM.geometry}
            material={materials["Computer material 2"]}
            position={[0.364, 0.031, -0.057]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyN"
            geometry={nodes.KeyN.geometry}
            material={materials["Computer material 2"]}
            position={[0.293, 0.031, 0.074]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyO"
            geometry={nodes.KeyO.geometry}
            material={nodes.KeyO.material}
            position={[0.189, 0.031, -0.388]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyP"
            geometry={nodes.KeyP.geometry}
            material={nodes.KeyP.material}
            position={[0.26, 0.031, -0.519]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyQ"
            geometry={nodes.KeyQ.geometry}
            material={nodes.KeyQ.material}
            position={[-0.382, 0.031, 0.659]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyR"
            geometry={nodes.KeyR.geometry}
            material={nodes.KeyR.material}
            position={[-0.168, 0.031, 0.267]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyS"
            geometry={nodes.KeyS.geometry}
            material={nodes.KeyS.material}
            position={[-0.157, 0.031, 0.569]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyT"
            geometry={nodes.KeyT.geometry}
            material={nodes.KeyT.material}
            position={[-0.097, 0.031, 0.136]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyU"
            geometry={nodes.KeyU.geometry}
            material={nodes.KeyU.material}
            position={[0.046, 0.031, -0.126]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyV"
            geometry={nodes.KeyV.geometry}
            material={materials["Computer material 2"]}
            position={[0.15, 0.031, 0.336]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyW"
            geometry={nodes.KeyW.geometry}
            material={nodes.KeyW.material}
            position={[-0.311, 0.031, 0.528]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyX"
            geometry={nodes.KeyX.geometry}
            material={materials["Computer material 2"]}
            position={[0.008, 0.031, 0.598]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyY"
            geometry={nodes.KeyY.geometry}
            material={nodes.KeyY.material}
            position={[-0.025, 0.031, 0.005]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="KeyZ"
            geometry={nodes.KeyZ.geometry}
            material={materials["Computer material 2"]}
            position={[-0.064, 0.031, 0.729]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Minus"
            geometry={nodes.Minus.geometry}
            material={nodes.Minus.material}
            position={[0.176, 0.032, -0.686]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="OSLeft"
            geometry={nodes.OSLeft.geometry}
            material={materials["Computer material 2"]}
            position={[0.082, 0.031, 0.791]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Period"
            geometry={nodes.Period.geometry}
            material={materials["Computer material 2"]}
            position={[0.507, 0.031, -0.319]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Quote"
            geometry={nodes.Quote.geometry}
            material={nodes.Quote.material}
            position={[0.486, 0.031, -0.609]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Semicolon"
            geometry={nodes.Semicolon.geometry}
            material={nodes.Semicolon.material}
            position={[0.414, 0.031, -0.478]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ShiftLeft"
            geometry={nodes.ShiftLeft.geometry}
            material={nodes.ShiftLeft.material}
            position={[-0.182, 0.031, 0.945]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="ShiftRight"
            geometry={nodes.ShiftRight.geometry}
            material={nodes.ShiftRight.material}
            position={[0.67, 0.009, -0.612]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Slash"
            geometry={nodes.Slash.geometry}
            material={materials["Computer material 2"]}
            position={[0.579, 0.031, -0.449]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Space"
            geometry={nodes.Space.geometry}
            material={nodes.Space.material}
            position={[0.229, 0.031, 0.523]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
          <KeyButton
            name="Tab"
            geometry={nodes.Tab.geometry}
            material={nodes.Tab.material}
            position={[-0.473, 0.031, 0.825]}
            rotation={[0, -0.499, 0]}
            scale={[0.057, 0.036, 0.057]}
          />
        </KeyButton>
      </group>
    </group>
  );
}

useGLTF.preload("/3dModels/keyboard.glb");