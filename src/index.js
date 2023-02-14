import express from 'express';
import { Router } from 'express';
import { hello } from './hello.js';

const port = parseInt(process.env.PORT) || 8080;
const app = express();
const router = Router();

// router
router.get('/', hello);
app.use(router);

// listern
app.listen(port, () => {
  console.log(`itkr-nodejs-cloudrun-sample: listening on port ${port}`);
});
