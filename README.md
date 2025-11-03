<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="Vino Auto BenchLab — Intelligent Diagnostics">
  <title>Vino Auto BenchLab — Locked Baseline</title>

  <!-- Responsive scaling and screen fit -->
  <style>
    html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 100vh;
    }

    .main-section, .chat-section, .report-section {
      width: 90%;
      max-width: 480px;
      margin: 0 auto;
      text-align: center;
    }

    input[type="text"] {
      width: 100%;
      max-width: 320px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #8B0000;
      outline: none;
    }

    button {
      width: auto;
      min-width: 100px;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background: #8B0000;
      color: #FFFAFA;
      font-weight: bold;
    }

    @media (min-width: 768px) {
      .main-section {
        max-width: 600px;
      }
    }
  </style>