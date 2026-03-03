import { forwardRef } from 'react'

const EmailField = forwardRef(function EmailField(
  { value, onChange, error },
  ref
) {
  return (
    <div
      ref={ref}
      className={`form-section${error ? ' form-section--error' : ''}`}
    >
      <div className="form-section__number">Q01</div>

      <label className="form-section__label" htmlFor="email-input">
        Your email address<span className="required-dot">*</span>
      </label>

      <div className="form-section__sublabel">
        We'll use this to secure your priority access.
      </div>

      <input
        id="email-input"
        type="email"
        className={`input${error ? ' input--error' : ''}`}
        placeholder="you@example.com"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="email"
      />

      {error && <div className="field-error">⚠ {error}</div>}
    </div>
  )
})

export default EmailField
