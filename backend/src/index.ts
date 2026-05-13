import app, { port } from "./app.js";

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
