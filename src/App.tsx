import { useState } from 'react';
import './App.css';

export default function App() {
  const [tab, setTab] = useState('Home');
  const [username, setUsername] = useState('Player');
  const [version, setVersion] = useState('1.21.11');
  const [message, setMessage] = useState('Welcome to BHAIXLAUNCHER');

  const notify = (text: string) => setMessage(text);

  return (
    <div className="launcher">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">B</div>
          <div>
            <h2>BHAIX<span>LAUNCHER</span></h2>
            <small>MINECRAFT LAUNCHER</small>
          </div>
        </div>

        <div className="nav-label">MENU</div>
        {['Home', 'Versions', 'Cosmetics', 'Accounts', 'Settings'].map(item => (
          <button
            key={item}
            className={`nav-item ${tab === item ? 'active' : ''}`}
            onClick={() => setTab(item)}
          >
            <span>{({Home:'⌂',Versions:'▣',Cosmetics:'✦',Accounts:'◉',Settings:'⚙'} as Record<string,string>)[item]}</span>
            {item}
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="online-dot" />
          <span>Launcher UI Preview</span>
          <small>v1.0.0</small>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand">BHAIX<span>LAUNCHER</span></div>
          <div className="top-status"><i /> LOCAL DEMO PROFILE</div>
        </header>

        {tab === 'Home' && (
          <>
            <section className="hero">
              <div className="hero-content">
                <div className="eyebrow">✦ YOUR MINECRAFT EXPERIENCE</div>
                <h1>YOUR WORLD.<br/><span>YOUR ADVENTURE.</span></h1>
                <p>Welcome to the next generation of Minecraft launching.</p>
                <button className="primary-button" onClick={() => notify('Game launching is not connected yet.')}>
                  ▶ &nbsp; PLAY MINECRAFT
                </button>
              </div>
              <div className="hero-art">
                <div className="cube">⛏</div>
                <div className="cube-glow" />
              </div>
              <div className="hero-tag">BHAIXLAUNCHER <b>01</b></div>
            </section>

            <div className="section-heading">
              <div><small>YOUR SETUP</small><h2>Launch configuration</h2></div>
              <span className="ready-label">● DEMO MODE</span>
            </div>

            <section className="config-grid">
              <div className="panel version-panel">
                <div className="panel-icon">▣</div>
                <div className="panel-info">
                  <small>GAME VERSION</small>
                  <h3>Java Edition</h3>
                  <select value={version} onChange={e => setVersion(e.target.value)}>
                    <option>1.21.11</option>
                    <option>1.21.10</option>
                    <option>1.21.8</option>
                    <option>1.20.4</option>
                    <option>1.20.1</option>
                  </select>
                </div>
              </div>

              <div className="panel account-panel">
                <div className="panel-icon">◉</div>
                <div className="panel-info">
                  <small>LOCAL PROFILE</small>
                  <h3>{username || 'Player'}</h3>
                  <input value={username} maxLength={16} onChange={e => setUsername(e.target.value)} placeholder="Enter username"/>
                </div>
              </div>
            </section>

            <section className="bottom-grid">
              <div className="panel news-panel">
                <small>WHAT'S NEW</small>
                <h3>Welcome to BHAIXLAUNCHER</h3>
                <p>Your launcher interface is ready for its next development stage.</p>
                <span className="green-text">MORE FEATURES COMING SOON ↗</span>
              </div>
              <div className="panel profile-panel">
                <div className="avatar">⛏</div>
                <div><small>PLAYER PROFILE</small><h3>{username || 'Player'}</h3><span className="green-text">LOCAL DEMO</span></div>
              </div>
            </section>
          </>
        )}

        {tab === 'Versions' && (
          <section className="page-panel">
            <small>GAME CONFIGURATION</small><h1>Versions</h1>
            <p>Select the Minecraft version you want to use.</p>
            <select value={version} onChange={e => setVersion(e.target.value)}>
              <option>1.21.11</option><option>1.21.10</option><option>1.21.8</option><option>1.20.4</option><option>1.20.1</option>
            </select>
            <p className="green-text">Selected version: {version}</p>
            <p className="muted">Version downloading and launching will be added later.</p>
          </section>
        )}

        {tab === 'Cosmetics' && (
          <section className="page-panel">
            <small>PERSONALIZATION</small><h1>Cosmetics</h1>
            <p>Make your player profile yours.</p>
            <div className="cosmetic-grid">
              <div className="cosmetic-card"><div>🧥</div><h3>Character skins</h3><p>Skin upload coming soon</p></div>
              <div className="cosmetic-card"><div>🪽</div><h3>Capes</h3><p>Cape customization coming soon</p></div>
            </div>
          </section>
        )}

        {tab === 'Accounts' && (
          <section className="page-panel">
            <small>PLAYER IDENTITY</small><h1>Accounts</h1>
            <div className="cosmetic-card">
              <div>◉</div><h3>Local Demo Profile</h3>
              <p>Use a temporary name to preview the launcher interface.</p>
              <input value={username} maxLength={16} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
              <p className="green-text">No Minecraft authentication connected.</p>
            </div>
            <div className="cosmetic-card">
              <h3>Microsoft account</h3><p>Official sign-in integration planned.</p>
            </div>
            <div className="cosmetic-card">
              <h3>Ely.by</h3><p>Supported authentication integration planned.</p>
            </div>
          </section>
        )}

        {tab === 'Settings' && (
          <section className="page-panel">
            <small>PERSONALIZE</small><h1>Settings</h1>
            <div className="cosmetic-card"><h3>Appearance</h3><p>Emerald dark theme is enabled.</p></div>
            <div className="cosmetic-card"><h3>Launcher information</h3><p>BHAIXLAUNCHER v1.0.0 — UI Preview</p></div>
          </section>
        )}

        <footer><span>© 2026 BHAIXLAUNCHER</span><span>BUILT FOR YOUR ADVENTURE <b>✦</b></span></footer>
        <div className="toast">{message}</div>
      </main>

      <nav className="mobile-nav">
        {['Home','Versions','Cosmetics','Accounts','Settings'].map(item => (
          <button key={item} className={tab === item ? 'selected' : ''} onClick={() => setTab(item)}>
            <span>{({Home:'⌂',Versions:'▣',Cosmetics:'✦',Accounts:'◉',Settings:'⚙'} as Record<string,string>)[item]}</span>
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
