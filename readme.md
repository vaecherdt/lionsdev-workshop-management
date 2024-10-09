# Workshop, Vehicle and Maintenance Management API

## Description
This API was developed as part of a test with the objective of managing workshops, vehicles and maintenance services in a web application. It was built using Node.js, Express.js, MongoDB and Mongoose.

## Project Structure
```plaintext
/lionsdev-workshop-management
│
├── /src
    ├── /config
    │   ├── db.js
    ├── /controllers
    │   ├── maintenance.controller.js
    │   ├── vehicle.controller.js
    │   ├── workshop.controller.js
    ├── /models
    │   ├── maintenance.model.js
    │   ├── vehicle.model.js
    │   ├── workshop.model.js
    ├── /routes
    │   ├── maintenance.routes.js
    │   ├── vehicle.routes.js
    │   ├── workshop.routes.js
    └── app.js
```

## Dependencies
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/) to test the API

## Environment Configuration
1. Clone this repository to your local environment
2. Install project dependencies:
```bash
npm install
```
3. Make sure MongoDB has the correct connection string in the file `src/config/db.js`.

## Running the Project
To start the server, run the command:
```bash
npm start
```

## Testing the API

1. **Ensure the server is running:**
   - Execute the command:
     ```bash
     npm start
     ```
   - The server will be available at `http://localhost:3000`.

2. **Configuring requests:**
     ```
     http://localhost:3000/<endpoint>
     ```

3. **Testing the endpoints:**

   - **Vehicles**
     - `POST /vehicles`  
       Request body:
       ```json
       {
         "plate": "ABC-1234",
         "model": "Toyota Corolla",
         "year": 2020,
         "owner": "John Doe"
       }
       ```
     - `GET /vehicles`  
       Returns a list of all registered vehicles.
     - `PUT /vehicles/:id`  
       Request body (example to update the model):
       ```json
       {
         "model": "Honda Civic"
       }
       ```
     - `DELETE /vehicles/:id`  
       Deletes a vehicle by its ID.

   - **Workshops**
     - `POST /workshops`  
       Request body:
       ```json
       {
         "name": "John's Workshop",
         "address": "123 Flower Street",
         "specialties": ["Oil Change", "Alignment"]
       }
       ```
     - `GET /workshops`  
       Returns a list of all registered workshops.
     - `PUT /workshops/:id`  
       Request body (example to update the address):
       ```json
       {
         "address": "456 Brazil Avenue"
       }
       ```
     - `DELETE /workshops/:id`  
       Deletes a workshop by its ID.

   - **Maintenances**
     - `POST /maintenances`  
       Request body:
       ```json
       {
         "workshop": "<workshop_id>",
         "vehicle": "<vehicle_id>",
         "services": [
           { "name": "Oil Change", "price": 150 },
           { "name": "Alignment", "price": 100 }
         ],
         "date": "2024-10-08",
         "totalCost": 250
       }
       ```
     - `GET /maintenances`  
       Returns a list of all registered maintenances.
     - `PUT /maintenances/:id`  
       Request body (example to update the total cost):
       ```json
       {
         "totalCost": 300
       }
       ```
     - `DELETE /maintenances/:id`  
       Deletes a maintenance by its ID.