const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'Contacts.db'), (err) => {
  if (err) {
    console.log('Could not connect to database', err)
  } else {
    console.log('Connected to database')
  }
})

const methods = {

  getAllContacts: async function() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from contacts";
      db.all(sql, (error, rows) => {
        if (error) {
          console.log("ERROR running sql, ", sql, error)
          reject(error)
        } else {
          resolve(rows)
        }
      });
    })
  },

  createContact: async function({firstName, lastName, phoneNumber, email, address}) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO contacts(firstName, lastName, phoneNumber, email, address)"
      + "VALUES(?,?,?,?,?)";

      db.all(sql, [firstName, lastName, phoneNumber, email, address], 
      (error) => {
        if (error) {
          console.log("ERROR running sql, ", sql, error)
          reject(error)
        } else {
          resolve({ success : true })
        }
      });
    })
  },

  updateContact: async function({contactId, firstName, lastName, phoneNumber, email, address}) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE contacts SET"
      + " firstName = ?"  
      + ", lastName = ?" 
      + ", phoneNumber = ?" 
      + ", email = ?" 
      + ", address = ?"  
      + " WHERE contactID = " + contactId;

      db.run(sql, [firstName, lastName, phoneNumber, email, address], function(error) {
        if (error) {
          console.log("ERROR running sql,", sql, error)
          reject(error)
        } else {
          resolve({ success : true, rowsAffected: this.changes })
        }
      });
    })
  },

  deleteContact: async function(contactId) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM contacts"
      + " WHERE contactID = " + contactId;

      db.run(sql,  function(error) {
        if (error) {
          console.log("ERROR running sql,", sql, error)
          reject(error)
        } else {
          resolve({ success : true, rowsAffected: this.changes })
        }
      });
    })
  }
};


module.exports = methods;
