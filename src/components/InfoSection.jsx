import EmailButton from './EmailButton'
import LinkedInButton from './LinkedInButton'

export default function InfoSection() {
    return (
        <div className="info-section">
            <h1>Kunal Jain</h1>
            <h3>Game Developer</h3> 
            <p>kunal2144.github.io</p>
            <div className="btn-section">
            <EmailButton />
            <LinkedInButton />
            </div>
            <h2 className="info-section-headings">About</h2>
            <p className="info-section-content">I am game developer with an interest in learning various new and upcoming technologies.
            Currently learning React JS to extend my skillset!</p>
            <h2 className="info-section-headings">Interests</h2>
            <p className="info-section-content">Food enthusiast. Music lover. Internet surfer. Hustles. Travels. Pizza main.</p>
        </div>
    )
}