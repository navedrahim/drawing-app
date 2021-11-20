import "./Landing.css"

function Landing(){
  return(
    <div className="landing-page">
      <header className="landing-header">
        <h1>DrawBrite</h1>
        <p className="brief-description">
          Watch your drawings come to life with the magic of DrawBrite!
        </p>
      </header>
        <h3 className="heading">Light up your creativity.</h3>
      <main className="landing-main">
        <div className="main-text">
        <p className="description">
          Create designs by choosing colors to add to the grid with the color picker. Click on a circle to assign the selected color. <br/><br/>Toggle the back-lighting with the Light button. The Reset button will clear the grid of all colored circles. <br/><br/>When you are finished, click Save to add your design to the DrawBrite gallery!
        </p>
        </div>
        <div className="video-conainter">
          <p>video element here</p>
        </div>
      </main>
      <div className="meet-the-engineers">
        <h3 className="meet-section">
          Meet the engineers:
        </h3>
        <div className="card-container">
        <div className="card">
          <h3 className="name">Naved Rahim</h3>
          <img className="pic" src="https://i.imgur.com/XQv7eEy.png?1" alt="Naved" />
          <div className="statement-container">
            <p>I am a full stack developer with a penchant for learning new skills and technologies. Due to my background as a pharmacist, I have extensive experience in delivering optimal outcomes for both the customer and business side. This, along with my track record of meeting goals under pressure and working with teams will make me a valuable asset to any organization.</p>
          </div>
          <div className="links">
          <a href="https://github.com/navedrahim" target="_blank"><img className="icon" src="/icons/github-brands.svg
            " alt="" /></a>
            <a href="https://www.linkedin.com/in/naved-rahim/" target="_blank"><img className="icon" src="/icons/linkedin-brands.svg
            " alt="linkedIn" /></a>
          </div>
        </div>
        <div className="card">
          <h3 className="name">Nicholas Rynearson</h3>
          <img className="pic" src="https://i.imgur.com/YZ1YPJt.png" alt="Nicholas" />
          <div className="statement-container">
            <p>I am a software engineer who loves problem solving and learning new things. Fifteen years as a professor of Greek and Latin taught me a lot about explaining complex ideas to beginners. I believe a better world is possible and technology designed to empower people can help us build it.</p>
          </div>
          <div className="links">
            <a href="https://github.com/flexibleidealist" target="_blank"><img className="icon" src="/icons/github-brands.svg
            " alt="" /></a>
            <a href="https://www.linkedin.com/in/nicholas-rynearson-88a77635/" target="_blank"><img className="icon" src="/icons/linkedin-brands.svg
            " alt="linkedIn" /></a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Landing