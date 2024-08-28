import redis from "redis";

// Create a Redis client for subscribing
const subscriber = redis.createClient();

// Handle successful connection
subscriber.on("connect", () => {
  console.log("Redis client connected to the server");
});

// Handle connection errors
subscriber.on("error", (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Subscribe to the 'holberton school channel'
subscriber.subscribe("holberton school channel");

// Handle messages received on the channel
subscriber.on("message", (channel, message) => {
  console.log(`Received message: ${message}`);

  // Unsubscribe and quit if the message is 'KILL_SERVER'
  if (message === "KILL_SERVER") {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
