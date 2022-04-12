# Denogram - Server

Made with GraphQL, Apollo Server, MongoDB and NodeJS.

* Start me with `yarn dev`
* Remember to create your own `.env` file with the object BBDD with the MongoDB url auth (You can ask me for it if you want to!), and the SECRET_KEY

## Models

### User

```
name: String required,
username: String required unique,
email: String required unique,
avatar: String,
siteWeb: String,
description: String,
password: String required
createdAt: Date default Date.Now
```

### Queries

**getUser**

```
query getUser ($id: ID, $username: String) {
  getUser(id: $id, username: $username) {
      id
      name
      username
      email
  }
}

{
    "id": ""
    "username": ""
}
```


### Mutations

**register**

```
mutation register($input: UserInput) {
    register(input: $input) {
        id
        name
        username
        email
    }
}

{
    "input": {
        "name": "",
        "username": "",
        "email": "",
        "password": ""
    }
}
```