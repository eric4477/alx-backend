import redis from "redis";

// Create a Redis client for publishing
const publisher = redis.createClient();

// Handle successful connection
publisher.on("connect", () => {
  console.log("Redis client connected to the server");
});

// Handle connection errors
publisher.on("error", (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Function to publish a message to the channel after a delay
function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    publisher.publish("holberton school channel", message);
  }, time);
}

// Call publishMessage with different messages and delays
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
