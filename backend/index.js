const ethers = require("ethers");
require("dotenv").config();
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const {
  abi,
} = require("./artifacts/contracts/contractApi.sol/contractApi.json");
const contractInstance = new ethers.Contract(contractAddress, abi, signer);

const express = require("express");
const app = express();
app.use(express.json());

app.get("/markets-questions/:id", async (req, res) => {
  //http://localhost:3000/market-question/1
  try {
    const id = req.params.id;
    const question = await contractInstance.getMarketQuestions(id);
    let ques = [];
    ques[0] = question[0];
    ques[1] = parseInt(question[1]);
    ques[2] = parseInt(question[2]);
    res.send(ques);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/market-questions/", async (req, res) => {
  //http://localhost:3000/market-questions/
  try {
    const allQuestions = await contractInstance.getAllMarketQuestions();
    const questions = allQuestions.map((question) => ({
      id: parseInt(question.id),
      question: question.question,
      description: question.description,
      source: question.source,
      category: question.category,
      subCategory: question.subCategory,
    }));
    console.log(questions);
    res.send(questions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/market-questions", async (req, res) => {
  try {
    const { id, question, description, source, category, subCategory } =
      req.body;
    const tx = await contractInstance.setMarketQuestion(
      id,
      question,
      description,
      source,
      category,
      subCategory
    );
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/market-questions/:id", async (req, res) => {
  //http://localhost:3000/market-questions/1
  try {
    const id = req.params.id;
    const { question, description, source, category, subCategory } = req.body;
    const tx = await contractInstance.updateMarketQuestion(
      id,
      question,
      description,
      source,
      category,
      subCategory
    );
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/market-questions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tx = await contractInstance.deleteMarketQuestion(id);
    await tx.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`API server is listening on  port 3000`);
});
