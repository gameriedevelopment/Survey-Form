export default function RadioOption({ option, selected, onSelect }) {
  const isSelected = selected === option.value

  return (
    <div
      className={`option${isSelected ? ' option--selected' : ''}`}
      onClick={() => onSelect(option.value)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(option.value)}
    >
      <div className="option__indicator">
        <div className="option__dot" />
      </div>
      <div className="option__text">
        <div className="option__label">{option.label}</div>
        {option.desc && <div className="option__desc">{option.desc}</div>}
      </div>
    </div>
  )
}
