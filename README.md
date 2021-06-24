# IMMP Tech Challenge Contact Server

This program is a simple backend application for applying basic **C.R.U.D.** operations on a contact list.

## Database
A SQLite database is included with one table with the following schema 

```
CREATE TABLE contacts(
  contactId INTEGER primary key autoincrement,
  firstName text,
  lastName text,
  phoneNumber text,
  email text,
  address text
);
```

## Endpoints
Endpoint parameters and functionality can be observed in the contacts handler. 

```
1. GET /contacts - fetches all contacts 
2. POST /contacts - creates a contact and automatically assigns a contactId
3. PUT /contacts - updates a contact for all fields with specified contactId
4. DELETE /contacts - deletes a contact with specified contactId
```