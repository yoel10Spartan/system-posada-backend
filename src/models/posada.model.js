import sql from "./db.js";

const Posada = function(pos) {
    this.name = pos.name;
    this.lastname1 = pos.lastname1;
    this.lastname2 = pos.lastname2;
    this.contributor = pos.contributor;
    this.email = pos.email;
    this.numberPhone = pos.numberPhone;
    this.numberPhoneFijo = pos.numberPhoneFijo;
    this.mark = pos.mark;
    this.position = pos.position;
    this.area = pos.area;
    this.location = pos.location;
    this.years = pos.years;
};

Posada.create = (data, result) => {
  sql.query("INSERT INTO pos SET ?", data, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created attende: ", { id: res.insertId, ...data });
    result(null, { ok: true, id: res.insertId, ...data });
  });
};

Posada.getAll = (title, result) => {
  let query = "SELECT * FROM pos";

  if (title !== '') {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Posada: ", res);
    result(null, res);
  });
};

export default Posada;