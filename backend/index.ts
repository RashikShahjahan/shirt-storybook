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
          const resultArr = Object.keys(result).map((key) => [key]);
          console.log(resultArr);

          res.send(resultArr);
    }
    else{
        const result = await prisma.shirt.findMany();
        const resultArr = Object.keys(result).map((key) => [key]);
        console.log(resultArr);

        res.send(resultArr);
    }
});

app.get('/shirts/:id',async function (req, res) {
  const id = Number(req.params['id']);
  console.log(id);

  const result = await prisma.shirt.findUnique(
   { 
    where:{
      id:id
    }}
  );
  console.log(result);

  res.send(result);
});

app.post('/shirts/favorite',async function (req, res) {
 console.log(req.body);
 await prisma.shirt.update(
    {
      where:{
      id:req.body.id
    },
    data: {
      favorite: req.body.favorite,
      },
    }
  );
  res.send(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
