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
    link TEXT
      );
  `);

  //const query = `
  //INSERT INTO ideas(
  //image,
  //title,
  //category,
  //description,
  //link
  //) VALUES (?,?,?,?,?)`;

  //const values = [
  // "https://as2.ftcdn.net/jpg/00/44/17/11/500_F_44171108_7iRPSwptiKB34mSn1j5DiElTTyFAVHFS.jpg",
  // "Leia para seus filhos nesta quarentena.",
  // "Hora da Leitura Online",
  // "Lendo para uma criança você contribui para ela desenvolver atenção, concentração, memória e raciocínio. Dessa forma, toda criança pode desenvolver seu potencial ao máximo. Quando você lê para uma criança, ela pode buscar o futuro que quiser.",
  // "https://www.euleioparaumacrianca.com.br/",
  //];

  //db.run(query, values, function (err) {
  // if (err) return console.log(err);

  // console.log(this);
  //});

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
