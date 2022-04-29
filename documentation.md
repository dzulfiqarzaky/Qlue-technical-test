# Qlue-technical-test API Documentation

## Endpoints :

List of available endpoints:

-   `GET '/'`
-   `GET /:id`
-   `POST '/create'`

&nbsp;

## 1. GET /

Description:

-   Get all Profiles

Request:

_Response (200 - OK)_

```json
"data": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "skills": {
        "javascript": "advanced",
        "python": "basic",
        "golang": "expert",
        "php": "expert"
      }
    },
    {
      "id": 2,
      "first_name": "Will",
      "last_name": "Smith",
      "skills": {
        "javascript": "expert",
        "python": "basic",
        "golang": "advanced",
        "php": "advanced"
      }
    },
    ...
]
```

&nbsp;

## 2. GET /:id

Description:

-   Get Profile Detail by Id

Request:

_Response (200 - OK)_

```json
"data": [
    {
      "id": 1,
      "full_name": "John Doe",
      "last_name": "Doe",
      "skills": {
        "javascript": "advanced",
        "python": "basic",
        "golang": "expert",
        "php": "expert"
      }
    }
]
```

&nbsp;

## 3. POST /create

Description:

-   create new profile

-   body :

```
{
    "full_name": "John Doe",
    "expert_skills": ["golang","php"]
}
```

Request:

_Response (201 - created)_

```json
"data": [
    {
      "id": 5,
      "first_name": "John",
      "last_name": "Doe",
      "skills": {
        "javascript": "advanced",
        "python": "basic",
        "golang": "expert",
        "php": "expert"
      }
    }
]
```

&nbsp;
