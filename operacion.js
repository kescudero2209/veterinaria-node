const fs = require("fs");


const read = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json","utf8"))
  console.log(citas);
}


const register = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
  citas.push({nombre, edad, animal, color, enfermedad})
  fs.writeFileSync("citas.json", JSON.stringify(citas))
}


module.exports = { read, register };