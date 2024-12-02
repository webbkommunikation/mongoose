### 1

Do exercise 3 - 12 from last lecture "MongoDB exercises" but with moongose. Create one function for each exercise. Do not forget to create a schema!

### 2

Add schema validation to the users. Test your constraints to make sure that no invalid values can exist in this schema.

### 3

a)
Try to merge the functions from the old exercise 4 - 7 into one function. Your function should accept `city`, `minAge` and `maxAge` as arguments. For example: `findUsers("Chicago, 20, 30)`

b)
Refactor the above function to accept a single `options` argument. For example: `findUsers({city: "Chicago", minAge: 20, maxAge: 30})`

### 4

Create endpoints with Express for some of your functions from exercise 1.

- `POST /users`. Adds a new user.
- `GET /users` Finds all users. Advanced: You should be able to pass a query-parameter like `GET /users?city=Chicago&minAge=20&maxAge=30`. Look up query parameters in express.
- `DELETE /users/:name` Deletes a user by name. For example `DELETE /users/Daniel` deletes all users with the name Daniel.
- `PUT /users/:name` Updates a user by name. For example `PUT /users/Daniel` updates all users with the name Daniel to the body of the request. 
