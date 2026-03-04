export default function Topbar({ progress }) {
  return (
    <header className="topbar">
      <div className="topbar__logo">
        <img 
          src="/gamerie-logo.png" 
          alt="Gamerie" 
          className="topbar__logo-icon topbar__logo-img"
        />
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
