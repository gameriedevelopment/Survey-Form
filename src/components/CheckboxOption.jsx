export default function CheckboxOption({ option, checked, onToggle }) {
  return (
    <div
      className={`option${checked ? ' option--selected' : ''}`}
      onClick={() => onToggle(option.value)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onToggle(option.value)}
    >
      <div className="option__indicator option__indicator--checkbox">
        <span className="option__check">✓</span>
      </div>
      <div className="option__text">
        <div className="option__label">{option.label}</div>
        {option.desc && <div className="option__desc">{option.desc}</div>}
      </div>
    </div>
  )
}
