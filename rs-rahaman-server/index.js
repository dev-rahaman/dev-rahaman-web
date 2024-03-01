const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

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

app.get("/work-simple", async (req, res) => {
  const result = await WorkSimpleCollection.find().toArray();
  res.send(result);
});

// ----------------------------------ADMIN END----------------------------------

// PAYMENT RELATED API

// TODO: Make sure to sort the payment history descending. The newest payment will be at the top

app.listen(port, () => {
  console.log(`DevRahaman Server is Running on port ${port}`);
});
