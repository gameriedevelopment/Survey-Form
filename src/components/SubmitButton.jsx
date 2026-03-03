export default function SubmitButton({ loading, onClick }) {
  return (
    <div className="submit-area">
      <button
        className={`submit-btn${loading ? ' submit-btn--loading' : ''}`}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="submit-btn__spinner" />
            Submitting...
          </>
        ) : (
          'Submit'
        )}
      </button>
    </div>
  )
}
