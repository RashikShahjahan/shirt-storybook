import express from 'express'
import {PrismaClient} from '@prisma/client';
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post('/shirts', async(req, res) => {
    if (req.body.searchQuery !== ''){
        const result = await prisma.shirt.findMany({
            where: {
              material: {
                search: req.body.searchQuery
              },
              brand: {
                search: req.body.searchQuery
              },
            },
          });

          console.log(result);
          const resultArr = Object.keys(result).map((key) => [key, result[key]]);
          res.send(resultArr);
    }
    else{
        const result = await prisma.shirt.findMany();
        const resultArr = Object.keys(result).map((key) => [key, result[key]]);
        console.log(resultArr);

        res.send(resultArr);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
