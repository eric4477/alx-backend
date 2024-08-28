import redis from "redis";

// Create a Redis client
const client = redis.createClient();

// Handle connection events
client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Function to set a new school value
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display the value of a school
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error fetching the value: ${err.message}`);
    } else {
      console.log(`${reply}`);
    }
  });
}

// Call the functions to demonstrate functionality
displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
