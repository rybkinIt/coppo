import Logo from "./Logo";
import {useState} from "react";



const Page1 = () =>{
    const [parallaxSwiper, setParallaxSwiper] = useState(null)
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0
    const parallaxOpacity = 0.5
    return(
        <div className="page1-container slide-image" data-swiper-parallax={parallaxAmount}>

            <div className="logo" data-swiper-parallax={parallaxAmount}><Logo/></div>
            <h1 className="title-container" data-swiper-parallax={parallaxAmount}>
                <div className="title title1">B</div>
                <div className="title title2">u</div>
                <div className="title title3">i</div>
                <div className="title title4">l</div>
                <div className="title title5">d</div>
                <div className="title title6">i</div>
                <div className="title title7">n</div>
                <div className="title title8">g</div>
                <div className="title">&nbsp;</div>
                <div className="title title9"> B</div>
                <div className="title title10">e</div>
                <div className="title title11">y</div>
                <div className="title title12">o</div>
                <div className="title title13">n</div>
                <dvi className="title title14">d</dvi>
            </h1>
            <h2 className="subtitle-box" data-swiper-parallax={parallaxAmount}>
                <div className="subtitle-container"><div className="subtitle">We are a London based architecture and </div></div>
                <div className="subtitle-container"><div className="subtitle">design studio with a global reputation </div></div>
                <div className="subtitle-container"><div className="subtitle">for creating innovative spaces. </div></div>
            </h2>
        </div>
    )
}

export default Page1