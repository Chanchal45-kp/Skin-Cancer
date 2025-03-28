const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const hospitals = [
  { name: "AIIMS", location: "Delhi", contact: "011-26588500" },
  { name: "AS", location: "Delhi", contact: "011-26588500" },
  { name: "Fortis", location: "Noida", contact: "0120-4300222" },
  { name: "Medanta", location: "Gurugram", contact: "0124-4141414" },
  { name: "Max Hospital", location: "Ghaziabad", contact: "0120-2690999" }
];

app.get("/hospitals", (req, res) => {
  const { location } = req.query;
  if (!location) return res.json(hospitals);
  
  const filteredHospitals = hospitals.filter(h => h.location.toLowerCase() === location.toLowerCase());
  res.json(filteredHospitals);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
