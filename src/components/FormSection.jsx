import { forwardRef } from 'react'
import RadioOption from './RadioOption'
import CheckboxOption from './CheckboxOption'
import Scale10 from './Scale10'
import Scale5 from './Scale5'

const FormSection = forwardRef(function FormSection(
  { index, question, value, onChange, error },
  ref
) {
  const num = String(index).padStart(2, '0')

  const handleCheckboxToggle = (optionValue) => {
    const arr = Array.isArray(value) ? [...value] : []
    if (arr.includes(optionValue)) {
      onChange(arr.filter((v) => v !== optionValue))
    } else {
      onChange([...arr, optionValue])
    }
  }

  return (
    <div
      ref={ref}
      className={`form-section${error ? ' form-section--error' : ''}`}
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="form-section__number">Q{num}</div>

      <label className="form-section__label">
        {question.label}
        {question.required && <span className="required-dot">*</span>}
      </label>

      {question.sublabel && (
        <div className="form-section__sublabel">{question.sublabel}</div>
      )}

      {/* Radio */}
      {question.type === 'radio' && (
        <div className="options-list" role="radiogroup">
          {question.options.map((opt) => (
            <RadioOption
              key={opt.value}
              option={opt}
              selected={value}
              onSelect={onChange}
            />
          ))}
        </div>
      )}

      {/* Checkbox */}
      {question.type === 'checkbox' && (
        <div className="options-list">
          {question.options.map((opt) => (
            <CheckboxOption
              key={opt.value}
              option={opt}
              checked={Array.isArray(value) && value.includes(opt.value)}
              onToggle={handleCheckboxToggle}
            />
          ))}
        </div>
      )}

      {/* Scale 1-10 */}
      {question.type === 'scale10' && (
        <Scale10 value={value} onChange={onChange} />
      )}

      {/* Scale 1-5 */}
      {question.type === 'scale5' && (
        <Scale5 value={value} onChange={onChange} />
      )}

      {/* Open text */}
      {question.type === 'text' && (
        <textarea
          className="textarea"
          placeholder="Your answer..."
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {error && <div className="field-error">⚠ {error}</div>}
    </div>
  )
})

export default FormSection
