import express from "express";
import { postNumber, updateArr, deleteArr } from "./utils.js";
const app = express();
app.use(express.json());

let array = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  console.log(array);
  try {
    res.send(array);
  } catch (e) {
    res.status(404).send("error");
  }
});

app.post("/numbers/", (req, res) => {
  try {
    const newArray = postNumber(array, Number(req.body.num));
    res.send(newArray);
    console.log(newArray);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

app.delete("/numbers/:num", (req, res) => {
  //   const num = req.params.num;
  const newdeletedNumberArr = deleteArr(array, req.params.num);
  res.json(newdeletedNumberArr);
});

app.put("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const body = req.body.num;
  const updatedArr = updateArr(array, Number(num), Number(body));
  res.status(200).send(updatedArr);
});

app.listen(3000, () => {
  console.log("server running");
});
