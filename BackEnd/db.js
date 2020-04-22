const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./BackEnd.db");

db.serialize(function () {
  db.run(`
   CREATE TABLE IF NOT EXISTS ideas(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    image TEXT,
    title TEXT,
    category TEXT,
    description TEXT,
    link TEXT)
  `);
  const query = `
  INSERT INTO ideas (
    image,
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `;
  const values = [
    "https://image.flaticon.com/icons/svg/201/201565.svg",
    "Curso Online de Programação",
    "Estudos Online",
    "Na RocketSeat tem a plataforma Started com cursos 100% online e gratuitos para você entrar com o pé direito nas tecnologias mais desejadas do mercado. Descubra o caminho para ,a stack NodeJs, React e React Native.",
    "https://rocketseat.com.br/starter",
  ];

  db.run(query, values, function (err) {
    if (err) return console.log(err);
    console.log(this);
  });

  //db.run(`DELETE FROM ideas WHERE id = ?`, [1], function (err) {
  // if (err) return console.log(err);

  //  console.log("DELETE, this");
  //});

  //db.all(`SELECT * FROM ideas`, function (err, rows) {
  //  if (err) return console.log(err);

  //  console.log(rows);
  //});
});

module.exports = db;
