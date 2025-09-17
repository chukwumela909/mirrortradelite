const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://amirizew_db_user:g5LFmYN5CVD0VYZ5@cluster0.jmmg7pr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Establish the connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log when successfully connected
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB for address");
});

// Log any errors during connection
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

const addressSchema = new mongoose.Schema({
  Bitcoin: String,
  Ethereum: String,
  Tether: String,
  Tron: String,
  Dogecoin: String,
  Solana: String,
  Binance: String,
  USDC: String,
});

const AddressModel =
  mongoose.models.Address ||
  mongoose.model("Address", addressSchema);

module.exports = AddressModel;
