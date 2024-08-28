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

// Function to create a hash in Redis
// The hash will have the key 'HolbertonSchools' with city values
function createHash() {
  const hashKey = "HolbertonSchools";
  const hashValues = {
    Portland: 50,
    Seattle: 80,
    NewYork: 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2,
  };

  for (const [city, value] of Object.entries(hashValues)) {
    // Use hset to store each city value in the hash
    client.hset(hashKey, city, value, redis.print);
  }
}

// Function to display the hash stored in Redis
// It uses hgetall to get all fields and values in the hash
function displayHash() {
  const hashKey = "HolbertonSchools";

  client.hgetall(hashKey, (err, hash) => {
    if (err) {
      console.error(`Error fetching the hash: ${err.message}`);
    } else {
      console.log("Hash stored in Redis:", hash);
    }
  });
}

// Create the hash and display it
createHash();
displayHash();
