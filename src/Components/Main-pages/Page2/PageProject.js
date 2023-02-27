const PageProject = (props) => {
  return(
      <div className="page2-project">
      <div className="page2-project-image">
          <img className="project-image" src={props.image} alt="image1"/>
      </div>
      <div className="page2-project-link-box">
          <a className="page2-project-link" href={props.link}>{props.linkText}</a>
      </div>
  </div> )
}

export default PageProject