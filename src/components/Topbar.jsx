export default function Topbar({ progress }) {
  return (
    <header className="topbar">
      <div className="topbar__logo">
        <div className="topbar__logo-icon">G</div>
        Gamerie
      </div>
      <div className="topbar__progress-label">{progress}% Complete</div>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}
