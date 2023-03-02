import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Header from "../Header/Header";


const MainPages = () =>{

    let x = 0

    const main = document.querySelector('.main-pages')
    document.body.addEventListener('wheel', (e) => {
        const width = document.body.offsetWidth
        x = x + e.wheelDeltaY
        console.log(x)
        if(x < -width + document.innerWidth) {
            if(x===10){
            window.scrollBy(x, document.innerWidth)}
        }


        if(x > 0) {
            x = 0
        }
        const tr = `translateX(${x}px)`
        document.body.style.transform = tr


    })

    return(
        <div className="main-pages">
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
        </div>
    )
}

export default MainPages