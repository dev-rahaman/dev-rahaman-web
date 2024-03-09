const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 7000;

// middleware
// app.use(cors());
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER_KEY}:${process.env.MONGODB_PASS_KEY}@cluster0.bk91ias.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();

    // await client.db("admin").command({ ping: -1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("zone is running");
});

// ----------------------------------COLLECTION----------------------------------
const WorkSimpleCollection = client.db("Dev-rahaman").collection("Projects");
const Subscriber = client.db("Dev-rahaman").collection("Subscriber");

app.get("/projects", async (req, res) => {
  const result = await WorkSimpleCollection.find().toArray();
  res.send(result);
});

app.get("/projects/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  try {
    const project = await WorkSimpleCollection.findOne(filter);
    res.send(project);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the like count.");
  }
});

app.post("/subscriber", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }
    await Subscriber.insertOne({ email });
    res.status(201).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`DevRahaman Server is Running on port ${port}`);
});
