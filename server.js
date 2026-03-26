const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/vin', (req, res) => {
  const vin = req.query.vin;

  if (!vin) {
    return res.status(400).json({ error: "VIN required" });
  }

  let response = {
    make: "Unknown",
    model: "",
    year: "",
    engine: ""
  };

  if (vin.startsWith("SAL")) {
    response = {
      make: "Land Rover",
      model: "Range Rover Evoque",
      year: "2017",
      engine: "2.0L"
    };
  }

  if (vin.startsWith("JT")) {
    response = {
      make: "Toyota",
      model: "Hilux",
      year: "2012",
      engine: "2.5 D4D"
    };
  }

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("VIN server running...");
});