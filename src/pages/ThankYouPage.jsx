export default function ThankYouPage() {
  const registerUrl = import.meta.env.VITE_REGISTER_URL || 'https://mvp.gamerie.gg/register'

  return (
    <div className="thankyou">
      <div className="thankyou__content">
        <div className="thankyou__badge">⚡ Priority Access Secured</div>

        <h1 className="thankyou__heading">You're Early.</h1>

        <p className="thankyou__sub">
          You just secured priority access to Gamerie.
        </p>

        <p className="thankyou__body">
          We're building the future of esports networking — and you're
          officially part of it.
        </p>

        <a href={registerUrl} className="thankyou__cta" target="_blank" rel="noopener noreferrer">
          Create Your Gamerie Account
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  )
}
