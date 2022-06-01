import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import Spline from '@splinetool/react-spline';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spline scene="https://prod.spline.design/nBsP81TAG1NrRvi6/scene.splinecode" />} />
        <Route path="/tom" element={<Spline scene="https://prod.spline.design/WmcvYsnwpsFzmor6/scene.splinecode" />}/>
      </Routes>
    </BrowserRouter>
  );
}
