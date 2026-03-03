export default function Scale10({ value, onChange }) {
  return (
    <div>
      <div className="scale-row">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
          <div
            key={n}
            className={`scale-item${value === n ? ' scale-item--active' : ''}`}
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
        <span className="scale-labels__text">Not impressed</span>
        <span className="scale-labels__text">Very impressed</span>
      </div>
    </div>
  )
}
