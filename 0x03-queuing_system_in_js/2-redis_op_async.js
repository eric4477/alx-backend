import redis from "redis";
import { promisify } from "util";

// Create a Redis client
const client = redis.createClient();

// Event handler for successful connection to Redis server
client.on("connect", () => {
  console.log("Redis client connected to the server");
});

// Event handler for connection errors
client.on("error", (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Promisify the Redis 'get' method to use async/await
const getAsync = promisify(client.get).bind(client);

// Function to set a value in Redis
// Accepts 'schoolName' (key) and 'value' (value to set)
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print); // Log confirmation using redis.print
}

// Asynchronous function to display the value of a school from Redis
// Uses async/await to handle the promise returned by getAsync
async function displaySchoolValue(schoolName) {
  try {
    // Await the result of the getAsync method
    const value = await getAsync(schoolName);
    // Log the value to the console
    console.log(`${value}`);
  } catch (err) {
    // Log any errors that occur during the fetch operation
    console.error(`Error fetching the value: ${err.message}`);
  }
}

// Main function to demonstrate the functionality
// Calls displaySchoolValue and setNewSchool sequentially
async function run() {
  // Display the value for the key 'Holberton'
  await displaySchoolValue("Holberton");
  // Set a new value for the key 'HolbertonSanFrancisco'
  setNewSchool("HolbertonSanFrancisco", "100");
  // Display the newly set value for the key 'HolbertonSanFrancisco'
  await displaySchoolValue("HolbertonSanFrancisco");
}

// Execute the run function to start the script
run();
