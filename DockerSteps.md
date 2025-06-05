✅ 1. Prepare Your Node.js Project
Ensure your Node.js project is well-structured. A typical structure looks like:

pgsql
Kopieren
Bearbeiten
/my-nodejs-app
├── node_modules/
├── package.json
├── package-lock.json
├── .env
├── Dockerfile
├── docker-compose.yml
└── app.js (or index.js)
✅ 2. Create or Update Necessary Files
package.json (Ensure dependencies like mysql2 or sequelize are included):

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.2.4",
    "dotenv": "^16.0.3"
  }
}
```

.env (Environment variables):

```env

DB_HOST=mysql
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=mydatabase
```

✅ 3. Create a Dockerfile
A Dockerfile is a script that Docker uses to build images.

```Dockerfile


# Base image

FROM node:18

# Set working directory

WORKDIR /app

# Copy package.json and install dependencies

COPY package\*.json ./
RUN npm install

# Copy the entire project

COPY . .

# Expose port

EXPOSE 3000

# Start the application

CMD ["npm", "start"]
```

✅ 4. Create docker-compose.yml
This will define both the Node.js service and the MySQL database.

```yaml

version: '3.9'

services:
node-app:
build: .
ports: - "3000:3000"
environment: - DB_HOST=mysql - DB_USER=root - DB_PASSWORD=rootpassword - DB_NAME=mydatabase
depends_on: - mysql
volumes: - .:/app - /app/node_modules

mysql:
image: mysql:8
environment:
MYSQL_ROOT_PASSWORD: rootpassword
MYSQL_DATABASE: mydatabase
ports: - "3306:3306"
volumes: - mysql-data:/var/lib/mysql

volumes:
mysql-data:
```

✅ 5. Update Your Node.js Code for MySQL
Example app.js with MySQL connection:

```js
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js with Docker!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

✅ 6. Build and Run the Docker Containers
Ensure Docker is running on your system.

##Build the Docker image:

bash

```bash
docker-compose build
```

##Start the containers:

```bash

docker-compose up -d
```

##Check running containers:

```bash
docker ps
```

✅ 7. Access the Application
Open your browser and go to:

👉 http://localhost:3000

Connect to the MySQL database from your system:

```bash

mysql -h 127.0.0.1 -P 3306 -u root -p
Enter the password: rootpassword
```

✅ 8. Stop and Clean Docker Containers
Stop containers:

```bash
docker-compose down
```

Remove Docker images (optional):

```bash
docker system prune -a
```

✅ 9. Debugging Tips
Check logs of Node.js:

```bash
docker-compose logs node-app
```

Access Node.js container:

```bash
docker exec -it <container_id> /bin/sh
```

Check MySQL logs:

```bash
docker-compose logs mysql
```

### Container Management:

docker run: Creates and runs a container from an image. You can specify flags like -d for detached mode, -p for port mapping, and -it for interactive mode.
docker ps: Lists running containers.
docker stop: Stops a running container.
docker start: Starts a stopped container.
docker kill: Kills a running container.
docker rm: Removes a stopped container.
docker exec: Executes a command inside a running container.
docker logs: Fetches the logs of a container.
docker inspect: Displays detailed information about a container.

### Image Management:

docker pull: Downloads an image from a registry like Docker Hub.
docker images: Lists all local images.
docker rmi: Removes an image from your local machine.
docker build: Builds an image from a Dockerfile.
docker commit: Creates a new image from the changes made in a container.
docker push: Pushes an image to a registry.
docker search: Searches for images on Docker Hub.

### Other Useful Commands:

docker version: Displays the Docker version information.
docker info: Displays information about the Docker environment.
docker login: Logs in to a Docker registry.
docker volume: Manages Docker volumes for persistent storage.
docker network: Manages Docker networks.
docker compose: Manages multi-container applications using a docker-compose.yml file.

## To export a database to your MySQL container, you can follow these steps:

1. Export the database from the host machine: If the database is already on your local machine, use the mysqldump command to create a SQL dump file:

```bash
mysqldump -u [username] -p [database_name] > dump.sql

```

Replace [username] with your MySQL user.

Replace [database_name] with the name of the database you want to export.

You will be prompted to enter your MySQL password.

2. Copy the dump file to the container: Use the docker cp command to copy the SQL dump file into your MySQL container:

```bash
docker cp dump.sql 2eb3e24cc347:/dump.sql
```

- Replace 2eb3e24cc347 with your container ID or name.

3. Import the database inside the container: Access the container’s MySQL instance and import the dump file:

```bash
docker exec -it 2eb3e24cc347 mysql -u [username] -p [database_name] < /dump.sql
```

- Replace [username] with your MySQL user inside the container.

- Replace [database_name] with the name of the database where you want to import the data.

Notes:
Ensure the database exists inside the container before importing. If it doesn't, you can create one using:

```bash
docker exec -it 2eb3e24cc347 mysql -u [username] -p -e "CREATE DATABASE [database_name];"
```

Be sure to match your dump file's database settings (e.g., character sets, collation) with the container's MySQL configurations.

## To establish a connection between your Node.js application container

1. Networking: Attach Both Containers to the Same Network

- Create a Docker network if you don't already have one:

```bash
  docker network create my_network
```

- Connect both containers to this network:

```bash
docker network connect my_network nodejs_container
docker network connect my_network mysql_container
```

- Restart containers

```bash
docker restart nodejs_container mysql_container

```
