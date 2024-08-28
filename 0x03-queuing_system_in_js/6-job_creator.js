import kue from "kue";

// Create a Kue queue
const queue = kue.createQueue();

// Define job data
const jobData = {
  phoneNumber: "123-456-7890",
  message: "Hello from Kue!",
};

// Create a job in the 'push_notification_code' queue
const job = queue.create("push_notification_code", jobData).save((err) => {
  if (err) {
    console.error("Error creating job:", err);
  } else {
    console.log(`Notification job created: ${job.id}`);
  }
});

// No need to process jobs or handle completion/failure messages
