const oracledb = require('oracledb');

async function startServer() {
  try {
    const connection = await oracledb.getConnection({
      user: 'system',         // replace with your Oracle username
      password: '123456789',     // replace with your Oracle password
      connectString: '127.0.0.1:8081/xe'  // replace XE with your service name if it's different
    });

    console.log("Successfully connected to Oracle Database!");

    // Your further logic for handling database operations

    // Don't forget to close the connection
    await connection.close();

  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
  }
}

startServer();
