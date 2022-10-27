import app from './src/app.js';

//           porta ambiente produção || porta fixa local 3000 (ou 4000, ou 8080, ...)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})
