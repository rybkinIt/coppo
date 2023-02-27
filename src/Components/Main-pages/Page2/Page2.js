import PageProject from "./PageProject";

const Page2 = () => {
    return(
        <div className="page2-container">
            <div className="page2-box1">
                <div className="page2-head-title">
                    Introduction
                </div>
                <div className="page2-image-container">
                    <img className="page2-image" src="https://www.datocms-assets.com/71743/1657797867-aerial-3-copy.jpg" alt="image1"/>
                </div>
                <div className="text-box">
                    <div className="page2-subtitle">
                        Established 1997
                    </div>
                    <div className="page2-title">
                        We are an architectural studio that believes in going further. Being bold<br/>
                        Exploring the new. Where the surprising delights the mind. Where people love<br/>
                        to live, work and play. Let's start building beyond
                    </div>
                    <div className="page2-link-box">
                        <a className="page2-link" href="#"> Learn More About Us</a>
                    </div>
                </div>
            </div>
            <div className="page2-content-container">
                <div className="page2-content-box">
                    <PageProject
                        image={"https://www.datocms-assets.com/71743/1665559885-zil-pasyon-r1_1-2.jpg"}
                        link={"#"}
                        linkText={"View Project"}
                    />
                    <PageProject
                        image={"https://www.datocms-assets.com/71743/1659949646-studio-rhe_zil-pasyon-island-1-1-1.jpg"}
                        link={"#"}
                        linkText={"View Project"}
                    />
                    <PageProject
                        image={"https://www.datocms-assets.com/71743/1665999727-dl-rhe-gb-0977-online.jpg"}
                        link={"#"}
                        linkText={"View Project"}
                    />
                </div>
            </div>

        </div>
    )
}



export default Page2