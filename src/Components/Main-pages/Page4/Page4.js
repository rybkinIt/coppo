import Page4Project from "./Page4Project";

const Page4 = () => {
  return(
      <div className="page4-container">
          <div className="page4-text-container">
              <div className="page4-title-container">
                  <p className="page4-title">
                    In tune with London's fast changing
                    markets, Studio RHE combine
                    commercial know how with
                    creative originality
                  </p>
                  <a className="page4-link">View All Articles</a>
              </div>
              <div className="page4-subtitle-container">
                    <h1 className="page4-subtitle">Journal</h1>
              </div>
        </div>
      <div className="page4-content-container">

          <Page4Project
              class={"page4-img1"}
              image={"https://www.datocms-assets.com/71743/1673863483-small-pool-1-copy.jpeg"}
              link={"#"}
              linkText={"Read article"}
          />
          <div className="page4-horizontal-content">
              <Page4Project
                  class={"page4-img2"}
                  image={"https://www.datocms-assets.com/71743/1665150856-journal-richard-1.jpg"}
                  link={"#"}
                  linkText={"Read article"}
              />
              <Page4Project
                  class={"page4-img3"}
                  image={"https://www.datocms-assets.com/71743/1665137202-six-senses-journal-6.jpg"}
                  link={"#"}
                  linkText={"Read article"}
              />
          </div>
      </div>

  </div> )
}

export default Page4