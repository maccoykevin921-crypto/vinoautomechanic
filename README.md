<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Vino Auto BenchLab® - Restoration Pitstop Center | Intelligent vehicle diagnostics, VIN reports, and AI-powered automotive tools.">
  <title>Vino Auto BenchLab®</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/png" href="assets/vino_logo.png">
</head>
<body>
  <header>
    <div class="logo">
      <img src="assets/vino_logo.png" alt="Vino Auto BenchLab Logo">
      <h1>Vino Auto BenchLab®</h1>
      <p>Restoration Pitstop Center</p>
    </div>
  </header>

  <main>
    <section class="vin-lookup">
      <h2>Enter VIN to Begin Diagnostics</h2>
      <input type="text" id="vinInput" placeholder="Enter Vehicle VIN">
      <button id="lookupBtn">Preview</button>
    </section>

    <section class="report-section">
      <h2>Unlock Professional VIN Report</h2>
      <button id="unlockProBtn">Unlock Pro</button>
    </section>

    <section class="chat-section">
      <div class="chat-box">
        <div class="message support">Online Support: Hello! How can we assist?</div>
        <div class="message user">You: Hi, I’d like to check a VIN.</div>
      </div>
      <div class="chat-controls">
        <button id="askBtn">Ask (Free)</button>
        <button id="attachBtn">Attach</button>
      </div>
    </section>
  </main>

  <footer>
    <p>Powered by Vino Auto AI Diagnostics</p>
  </footer>

  <div id="cookieConsent">
    <p>This website uses cookies to optimize your experience. <button id="acceptCookies">Accept</button></p>
  </div>

  <audio id="typingSound" src="assets/typing.mp3" preload="auto"></audio>
  <audio id="clickSound" src="assets/click.mp3" preload="auto"></audio>

  <script src="script.js"></script>
</body>
</html>