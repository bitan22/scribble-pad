import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import styles from "../styles";
import { useNavigate } from "react-router-dom";
import { navVariants } from "../utils/motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SignUp from "./signUp";
import TextBlock from "./textBlock";
const HomeScreen = () => {
  // const navigate=useNavigate();
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
      <ParallaxLayer offset={0} speed={0.25}>
        <div class="animation_layer parallax" id="artback"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div class="animation_layer parallax" id="mountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div class="animation_layer parallax" id="jungle1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div class="animation_layer parallax" id="jungle2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div class="animation_layer parallax" id="jungle3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <div class="animation_layer parallax" id="jungle4"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div class="animation_layer parallax" id="manonmountain"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div class="animation_layer parallax" id="jungle5"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.25}>
        <TextBlock />
      </ParallaxLayer>
    </Parallax>
  );
};

export default HomeScreen;
