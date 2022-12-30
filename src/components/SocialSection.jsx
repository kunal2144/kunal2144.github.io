import GitHubButton from './GitHubButton'
import TwitterButton from './TwitterButton'
import InstagramButton from './InstagramButton'

export default function SocialSection() {
    return (
        <div className="social-section">
            <TwitterButton />
            <InstagramButton />
            <GitHubButton />
        </div>
    )
}