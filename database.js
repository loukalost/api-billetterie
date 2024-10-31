class Concert {
  constructor(id, name, date, place, description, price) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.place = place;
    this.description = description;
    this.price = price;
  }
}

class Reservation {
  constructor(id, concert, user) {
    this.id = id;
    this.concert = concert;
    this.user = user;
  }
}

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

// La base de données

const concerts = [];

const reservations = [];

const users = [];

class Database {
  constructor() {
    this.concerts = [];
  }

  addConcert(concert) {
    this.concerts.push(concert);
  }

  getConcerts() {
    return this.concerts;
  }
}

module.exports = Database;
