export default function SurveyHeader() {
  const termsUrl = import.meta.env.VITE_TERMS_OF_SERVICE || 'https://gamerie-platform-bolt.github.io/gamerie-terms-of-service/'
  const privacyUrl = import.meta.env.VITE_PRIVACY_POLICY || 'http://gamerie-platform-bolt.github.io/gamerie-privacy-policy/'

  return (
    <div className="survey__header">
      <h1 className="survey__title">
        Gamerie — <span className="survey__title-accent">Define Your Legacy</span>
      </h1>
      <p className="survey__subtitle">
        Build the Future of Gaming. Your feedback builds our world.
      </p>
      <p className="survey__consent">
        By proceeding with this survey, you acknowledge that you have read,
        understood, and agreed to our{' '}
        <a href={termsUrl} target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and{' '}
        <a href={privacyUrl} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>
    </div>
  )
}
