import { server } from "./server/Server";
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@typescriptapi.drq62ur.mongodb.net/`)
    .then(() => {
        server.listen(process.env.PORT || 3000, () => console.log("conectado"));
    })
    .catch((err) => console.log(err))