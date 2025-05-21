import app from "./app.js"

const port = 5000;
 
const startServer = async () => {
  app.listen(port, () => {
    console.log(`The server is running on ${port}`);
  });

};

try {
  startServer();
} catch (error) {
  console.log(`The error is is server.js page which is ${error.message}`);
}