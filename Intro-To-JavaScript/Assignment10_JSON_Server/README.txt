ASSIGNMENT 10 - JSON SERVER FILES

Each question has a separate folder and db.json. Run the server from inside that question's folder.

Q1: json-server --watch db.json --port 3001
GET http://localhost:3001/products?q=desk

Q2: json-server --watch db.json --port 3002
GET http://localhost:3002/employees

Q3: json-server --watch db.json --port 3003
GET http://localhost:3003/tasks
Filters: /tasks?priority=high  or  /tasks?completed=true

Q4: json-server --watch db.json --port 3004
GET /users, /orders, /products on localhost:3004

Q5: json-server --watch db.json --port 3005
GET http://localhost:3005/timetable?day=Monday

Q6: json-server --watch db.json --port 3006
GET http://localhost:3006/users?email=aarohi.vashisht27@gmail.com
POST http://localhost:3006/users

Keep each server running in a separate terminal. Use only the db.json belonging to that question. Q6 passwords are dummy practice values, not real credentials.
