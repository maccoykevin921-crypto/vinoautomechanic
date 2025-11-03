<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Vino Auto BenchLab — Locked Baseline</title>
<meta name="description" content="Vino Auto BenchLab — Locked baseline (Control.INC® intro + VIN lookup + online support + 3D model). Do not modify." />

<style>
  :root{
    --charcoal:#1C1C1E;
    --red:#8B0000;
    --white:#FFFAFA;
    --muted:#6b6b6b;
    --panel:#2a2a2b;
    --glass: rgba(255,255,255,0.03);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    font-family: "Helvetica Neue", Arial, sans-serif;
    background:var(--charcoal);
    color:var(--white);
    -webkit-font-smoothing:antialiased;
    line-height:1.5;
  }

  /* Startup intro overlay (shown once) */
  .intro {
    position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
    background:linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.9));
    z-index:9999;flex-direction:column;gap:18px;padding:24px;
  }
  .logo-box{
    width:220px;height:220px;border-radius:8px;background:#fff;display:flex;
    align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,.6);
  }
  .logo-box img{max-width:90%;height:auto;display:block}
  .intro h1{color:var(--charcoal);font-size:20px}
  .intro small{color:var(--muted)}

  /* page container */
  .wrap{max-width:980px;margin:0 auto;padding:32px 20px}

  header{display:flex;align-items:center;justify-content:space-between;padding:8px 0 22px;border-bottom:3px solid var(--red)}
  header .brand{display:flex;align-items:center;gap:14px}
  header .brand img{width:68px;height:auto}
  header h2{color:var(--red);font-size:20px;letter-spacing:.3px}

  nav{background:var(--panel);display:flex;gap:12px;padding:14px;border-radius:6px;margin-top:16px}
  nav a{color:var(--white);text-decoration:none;padding:8px 12px;font-weight:700}

  /* main hero */
  .hero{display:flex;gap:28px;align-items:flex-start;padding:36px 0}
  .left{flex:0 0 420px;background:var(--glass);padding:20px;border-radius:10px}
  .left h3{color:var(--red);margin-bottom:10px}
  .vin-row{display:flex;gap:8px;margin:12px 0}
  .vin-row input{flex:1;padding:10px;border-radius:6px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:var(--white)}
  .vin-row button{background:var(--red);color:var(--white);border:none;padding:10px 14px;border-radius:6px;cursor:pointer}

  .unlock-pro{display:block;margin-top:18px;background:#b30f0f;color:var(--white);padding:8px 12px;border-radius:8px;width:140px;text-align:center;cursor:pointer}

  /* Chat support */
  .chat{margin-top:18px;background:#222;border-radius:8px;padding:14px;color:var(--white)}
  .chat .message{background:rgba(255,255,255,0.02);padding:10px;border-radius:8px;margin-bottom:8px}
  .chat .controls{display:flex;gap:10px;margin-top:8px}
  .btn-soft{background:transparent;border:1px solid rgba(255,255,255,0.08);color:var(--white);padding:6px 10px;border-radius:6px;cursor:pointer}

  footer{margin-top:40px;color:var(--muted);text-align:center;padding:30px 10px;font-size:14px}

  /* Right column - 3D model */
  .right{flex:1;min-width:320px}
  .viewer{background:#111;border-radius:10px;padding:6px;height:420px;display:flex;align-items:center;justify-content:center}
  iframe.skef{width:100%;height:100%;border:0;border-radius:8px}

  /* responsive */
  @media (max-width:900px){
    .hero{flex-direction:column}
    .left{width:100%}
  }

  /* Locked notice (visual) */
  .locked-note{margin-top:10px;background:rgba(139,0,0,0.06);color:var(--red);padding:8px;border-radius:6px;font-size:13px}
</style>
</head>
<body>

<!-- Startup intro: shown once on first load -->
<div id="intro" class="intro" aria-hidden="false">
  <div class="logo-box">
    <!-- Canonical locked startup logo (user provided). Replace the src value if you host the image somewhere. -->
    <img src="https://vinoautomechanic.com/assets/ControlInc_logo_locked.png" alt="Control.INC Logo (locked)">
  </div>
  <h1>CONTROL.INC®</h1>
  <small>Vino Auto BenchLab® — Startup sequence</small>
  <div style="margin-top:14px">
    <button id="skipIntro" class="btn-soft" style="background:var(--red);color:var(--white);border:none;padding:10px 16px;border-radius:8px;cursor:pointer">Start</button>
  </div>
</div>

<div class="wrap">
  <header>
    <div class="brand">
      <img src="https://vinoautomechanic.com/assets/Ci_logo_small.png" alt="Ci logo"/>
      <div>
        <h2>Vino Auto BenchLab</h2>
        <div style="color:var(--muted);font-size:13px">Enter VIN to Begin Diagnostics</div>
      </div>
    </div>
    <div style="text-align:right">
      <div style="font-size:13px;color:var(--muted)">Locked baseline — No automatic updates</div>
    </div>
  </header>

  <nav aria-label="Main navigation">
    <a href="#">Home</a>
    <a href="#">Systems</a>
    <a href="#">AI Monitoring</a>
    <a href="#">Contact</a>
  </nav>

  <section class="hero" aria-label="Hero">
    <aside class="left" aria-labelledby="vinTitle">
      <h3 id="vinTitle">Vino Auto BenchLab — VIN Lookup</h3>

      <div class="vin-row" role="search">
        <input id="vinInput" placeholder="Enter VIN..." aria-label="VIN input">
        <button id="lookupBtn">Lookup</button>
      </div>

      <button id="unlockProBtn" class="unlock-pro">Unlock Pro</button>

      <div class="chat" aria-live="polite">
        <div class="message"><strong>Online Support:</strong> Hi there! How can I assist you today?</div>
        <div class="message" style="background:transparent;color:var(--muted)">You: Hi, I need help with diagnostics.</div>

        <div class="controls">
          <button id="askBtn" class="btn-soft">Ask (Free)</button>
          <button id="attachBtn" class="btn-soft">Attach</button>
        </div>

        <div class="locked-note">THIS SITE IS LOCKED: No automated changes, no recommendations unless you explicitly request edits.</div>
      </div>
    </aside>

    <main class="right">
      <div class="viewer" id="viewerWrap">
        <!-- Sketchfab embed: replace model ID if you change model -->
        <iframe class="skef"
          title="3D car model"
          src="https://sketchfab.com/models/b7b32eaca80d460c9338197e2c9d1408/embed"
          allow="autoplay; fullscreen; vr"
          allowfullscreen
        ></iframe>
      </div>
      <div style="margin-top:8px;color:var(--muted);font-size:12px">3D model (Sketchfab embed) — South Africa area default view.</div>
    </main>
  </section>

  <footer>
    Powered by Vino Auto AI Diagnostics — Locked Baseline.
  </footer>
</div>

<script>
/*
  LOCKED BASELINE NOTE
  --------------------
  This file is the user's locked baseline. Per user command:
  - Do not auto-update, recommend, or modify content.
  - This script only contains minimal interactive behavior (VIN lookup mock, intro skip).
  - Do not add analytics, auto-fetch or change the UI automatically.
*/

/* Intro skip behavior */
(function(){
  const intro = document.getElementById('intro');
  const skip = document.getElementById('skipIntro');
  // show intro once per session; user wanted an animated startup only
  skip.addEventListener('click', ()=>{
    intro.style.display='none';
  });
})();

/* VIN lookup mock (client-side only) */
(function(){
  const vinInput = document.getElementById('vinInput');
  const lookupBtn = document.getElementById('lookupBtn');
  lookupBtn.addEventListener('click', ()=>{
    const vin = vinInput.value.trim();
    if(!vin){
      alert('Enter a VIN to lookup (mock).');
      return;
    }
    // MOCK: show a small overlay with preview (no network calls)
    alert('VIN lookup (mock): VIN ' + vin + ' — preview only. Use backend APIs to enable full reports.');
  });
})();

/* Unlock Pro button (mock) */
(function(){
  const unlock = document.getElementById('unlockProBtn');
  unlock.addEventListener('click', ()=>{
    alert('Unlock Pro action (mock). Payment / unlock handled by your backend.');
  });
})();

/* Chat controls (local only) */
(function(){
  const ask = document.getElementById('askBtn');
  const attach = document.getElementById('attachBtn');
  ask.addEventListener('click', ()=> alert('Ask (Free) — open support panel (mock).'));
  attach.addEventListener('click', ()=> alert('Attach file — attachment UI (mock).'));
})();

/* Safety: no network calls are made automatically. */
</script>

</body>
<!-- Control.INC® Render Secure Sync Verification -->
<footer id="syncFooter" style="text-align:center;margin-top:40px;font-family:'Helvetica Neue',Arial,sans-serif;color:#FFFAFA;background:#1C1C1E;padding:14px 0;font-size:13px;letter-spacing:0.4px;border-top:2px solid #8B0000;">
  🔒 Control.INC® Secure Sync Active — vinoautomechanic.com linked to Render Cloud
</footer>
<script>
  // Optional live check animation (shows fade glow briefly after load)
  window.addEventListener('load', () => {
    const f = document.getElementById('syncFooter');
    f.style.transition = 'all 1.5s ease';
    f.style.boxShadow = '0 0 10px #8B0000';
    setTimeout(()=>{f.style.boxShadow='none';},2000);
  });
</script>
<!-- End Verification -->
</html>