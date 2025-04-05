import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {userDetail} from "../constants/index.js";

const Hero = () =>{

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return(
        <section className="min-h-screen w-full flex flex-col relative " id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-2">
                <p className="text-2xl sm:text-3xl font-medium text-white text-center font-generalsans">Hi, I am {userDetail.Name} <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Web Applications</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                <Canvas className="w-full h-full" >
                    <Suspense fallback = {<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,270]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position = {sizes.deskPosition}
                                rotation = {[0, 3.2, 0.0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target position = {sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10,10,10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's Work Together" isBeam
                            containerClass="w-full sm:min-w-96"></Button>
                </a>
            </div>
        </section>
    )
}

export default Hero