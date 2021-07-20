# IMMP Tech Challenge Contact Server

This program is a simple backend application for applying basic **C.R.U.D.** operations on a contact list.

## Getting Started
Run the following commands at project root:
```
npm install
npm run start 
```

You should see the following message in the terminal on successful startup

```
Express server is running on port 9000
Connected to database
```


## Endpoints
Endpoint parameters and functionality can be observed in `src/routes/contacts`. 

1. `GET /contacts` - fetches all contacts 
- Returns:
  ```
  [
      {
          "contactId": 3,
          "firstName": "Roy",
          "lastName": "Rogers",
          "phoneNumber": "617-123-4567",
          "email": "roy.rogers@gmail.com",
          "address": "3 Lighting Way, Boston 02135"
      },
      {
          "contactId": 4,
          "firstName": "Nasir",
          "lastName": "Jones",
          "phoneNumber": "908-816-1994",
          "email": "nasir@massappeal.com",
          "address": "41st Ave, Long Island City, NY 11101"
      },
      {
          "contactId": 10,
          "firstName": "Samuel",
          "lastName": "Adams",
          "phoneNumber": "617-368-5080",
          "email": "samuel@samadams.com",
          "address": "30 Germania St, Boston, MA 02130"
      },
      {
          "contactId": 11,
          "firstName": "Limu",
          "lastName": "Emu",
          "phoneNumber": "617-357-9500",
          "email": "limu.emu@libertymutual.com",
          "address": "175 Berkeley St, Boston, MA 02116"
      }
  ]
  ```

2. `POST /contacts` - creates a contact and automatically assigns a contactId

- Example body:
  ```
  {
      "firstName" : "Limu",
      "lastName" : "Emu",
      "phoneNumber": "617-357-9500",
      "email": "limu.emu@libertymutual.com",
      "address": "175 Berkeley St, Boston, MA 02116"
  }
  ```
- Returns: 
  ``` 
  { "success": true } 
  ``` 

3. `PUT /contacts` - updates a contact for all fields with specified contactId
- Example body:
  ```
  {
      "contactId": 11,
      "firstName": "Limu",
      "lastName": "Emu",
      "phoneNumber": "617-357-9500",
      "email": "limu.emu@libertymutual.com",
      "address": "175 Berkeley St, Boston, MA 02116"
  }
  ```
- Returns: 
  ``` 
  { "success": true, "rowsAffected": 1  } 
  ``` 

4. `DELETE /contacts/:contactId` - deletes a contact with specified contactId
- Returns: 
  ``` 
  { "success": true, "rowsAffected": 1  } 
  ``` 

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