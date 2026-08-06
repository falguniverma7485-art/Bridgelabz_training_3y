# Assignment 1

## 1. Difference between Frontend, Backend and Full Stack Development

**Frontend:** Frontend is the part of a website that users can see and interact with. It includes buttons, images, text, forms, etc.
**Example:** The Amazon homepage that we use to search products.

**Backend:** Backend works behind the scenes. It handles data, login, databases and server-side operations.
**Example:** When we log in to Amazon, the backend checks our username and password.

**Full Stack:** A full stack developer can work on both frontend and backend.
**Example:** A developer who builds the complete Amazon website from the user interface to the database.

---

## 2. Client-Server Model Diagram

```
+---------+         Request         +---------+
| Client  | --------------------->  | Server  |
|Browser  |                         |         |
|         | <---------------------  |         |
+---------+        Response         +---------+
```

---

## 3. How a Browser Requests and Displays a Web Page

When we enter a website address in the browser, the browser sends a request to the web server. The server processes the request and sends back HTML, CSS and JavaScript files. The browser reads these files and displays the webpage on the screen.

---

## 4. Tools Required for Web Development

- **VS Code** – Used to write code.
- **Web Browser (Chrome/Edge)** – Used to view websites.
- **Git** – Used to manage project versions.
- **GitHub** – Used to store and share projects online.
- **Live Server Extension** – Helps to run HTML pages instantly.

---

## 5. What is a Web Server?

A web server is a computer or software that stores websites and sends web pages to users when they request them.

**Examples:**
- Apache
- Nginx
- Microsoft IIS

---

## 6. Roles in a Project

**Frontend Developer:** Designs and develops the user interface.

**Backend Developer:** Handles server, business logic and database connection.

**Database Administrator (DBA):** Manages the database, backups and security.

---

## 7. VS Code Setup

VS Code has been installed and configured for HTML, CSS and JavaScript development.

(Screenshot attached separately.)

---

## 8. Static vs Dynamic Website

**Static Website:** Shows the same content to every user.
**Example:** Portfolio website.

**Dynamic Website:** Content changes according to the user or database.
**Example:** Facebook, Instagram.

---

## 9. Five Web Browsers and Their Rendering Engines

| Browser | Rendering Engine |
|----------|------------------|
| Google Chrome | Blink |
| Microsoft Edge | Blink |
| Mozilla Firefox | Gecko |
| Safari | WebKit |
| Opera | Blink |

Different browsers use different rendering engines, so sometimes websites may look slightly different.

---

## 10. Basic Web Architecture Diagram

```
+--------+      Request      +---------+
| Client | ----------------> | Server  |
+--------+                   +---------+
                                 |
                                 |
                                 v
                           +------------+
                           | Database   |
                           +------------+
                                 ^
                                 |
                               APIs
```