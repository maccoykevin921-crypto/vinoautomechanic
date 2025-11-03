<script>
  document.body.style.visibility = 'hidden';
</script>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="Vino Auto BenchLab — Intelligent Diagnostics">
  <title>Vino Auto BenchLab — Locked Baseline</title>

  <style>
    :root {
      --charcoal: #1C1C1E;
      --red: #8B0000;
      --white: #FFFAFA;
      --muted: #6b6b6b;
      --panel: #2a2a2b;
      --glass: rgba(255,255,255,0.03);
    }

    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background: var(--charcoal);
      color: var(--white);
      font-family: "Helvetica Neue", Arial, sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
    }

    h1 {
      color: var(--red);
      margin-bottom: 10px;
    }

    input[type="text"] {
      width: 90%;
      max-width: 320px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid var(--red);
      background: var(--panel);
      color: var(--white);
      outline: none;
    }

    button {
      width: auto;
      min-width: 100px;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background: var(--red);
      color: var(--white);
      font-weight: bold;
      margin-top: 10px;
    }

    footer {
      position: fixed;
      bottom: 10px;
      width: 100%;
      text-align: center;
      color: var(--muted);
      font-size: 12px;
    }

    @media (min-width: 768px) {
      input[type="text"] {
        max-width: 400px;
      }
    }
  </style>
<body><!-- Control.INC® Secure Intro Animation with Sound -->
<div id="introScreen">
  <div class="introContent">
    <img src="assets/control_inc_logo.jpeg" alt="Control.INC Logo" class="introLogo">
    <p class="introText">System Secure Sync Active</p>
  </div>
  <audio id="introSound" src="assets/startup_accel.mp3" preload="auto"></audio>
</div>

<style>
  #introScreen {
    position: fixed;
    inset: 0;
    background: #FFFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
    transition: opacity 1s ease;
  }

  .introLogo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .introText {
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: #8B0000;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  body.loaded #introScreen {
    opacity: 0;
    pointer-events: none;
  }
</style>

<script>
  window.addEventListener('load', () => {
    const sound = document.getElementById('introSound');
    sound.volume = 0.8;
    sound.play().catch(() => {}); // start quietly even if autoplay is restricted

    setTimeout(() => {
      // fade sound out gradually
      const fade = setInterval(() => {
        if (sound.volume > 0.05) {
          sound.volume -= 0.05;
        } else {
          sound.pause();
          clearInterval(fade);
        }
      }, 150);
      }, 150);

document.body.style.visibility = 'visible';  // ✅ show site after intro
document.body.classList.add('loaded');

}, 2500);
  });
</script>
<!-- End Control.INC® Intro -->
  <main class="main-section">
    <h1>Vino Auto BenchLab®</h1>
    <p>Enter VIN to Begin Diagnostics</p>
    <input type="text" id="vinInput" placeholder="Enter VIN">
    <button id="lookupBtn">Lookup</button>
  </main>

  <footer>
    Powered by Vino Auto AI Diagnostics — Control.INC®
  </footer>

  <script>
    // Simple test click mock for VIN lookup
    const btn = document.getElementById('lookupBtn');
    btn.addEventListener('click', () => {
      const vin = document.getElementById('vinInput').value.trim();
      if (!vin) {
        alert('Please enter a VIN first.');
      } else {
        alert('VIN Lookup (mock): ' + vin);
      }
    });
  </script>
</body>
</html>