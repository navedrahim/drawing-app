import "./Landing.css"

function Landing(){
  return(
    <div className="langing-page">
      <header className="landing-header">
        <h1>DrawBrite</h1>
        <p className="brief-description">
          Watch your drawings come to life with the magic of DrawBrite!
        </p>
      </header>
      <main>
        <h3 className="heading">Heading Text</h3>
        <p className="description">
          give me all your money
        </p>
        <div className="video-conainter">
          {/* video element */}
        </div>
      </main>
      <div className="meet-the-engineers">
        <p className="meet-section">
          Meet the engineers:
        </p>
        <div className="card-container">
        <div className="card">
          <h3 className="name">Naved Rahim</h3>
          <p></p>
          <img src="https://i.imgur.com/XQv7eEy.png?1" alt="Naved" />
          <div className="links">
          </div>
        </div>
        <div className="card">
          <h3 className="name">Nicholas Rynearson</h3>
          <p></p>
          <img src="https://i.imgur.com/YZ1YPJt.png" alt="Nicholas" />
          <div className="links">
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Landing