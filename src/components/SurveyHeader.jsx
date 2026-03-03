export default function SurveyHeader() {
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
        <a href="#">Terms &amp; Conditions</a> and{' '}
        <a href="#">Privacy Policy</a>.
      </p>
    </div>
  )
}
