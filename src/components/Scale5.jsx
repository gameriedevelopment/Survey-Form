export default function Scale5({ value, onChange }) {
  return (
    <div>
      <div className="scale5-row">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`scale5-item${value === n ? ' scale5-item--active' : ''}`}
            onClick={() => onChange(n)}
            role="radio"
            aria-checked={value === n}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onChange(n)}
          >
            {n}
          </div>
        ))}
      </div>
      <div className="scale-labels">
        <span className="scale-labels__text">Not valuable</span>
        <span className="scale-labels__text">Extremely valuable</span>
      </div>
    </div>
  )
}
