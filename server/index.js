import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js"
import transactionRoutes from "./routes/transaction.js"
import Transaction from "./models/Transaction.js"
import { kpis, products, transactions } from "./data/data.js"

/* configurations */
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

/* ROUTES  */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);


/* set up mongoose */
const PORT = process.env.PORT || 9000
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

        /* add data one time only or as needed */
        // await mongoose.connection.db.dropDatabase() // prevent duplicate data
        // KPI.insertMany(kpis)
        // Product.insertMany(products);
        // Transaction.insertMany(transactions);

    })
    .catch((error) => console.log(`${error} did not connect`))
        



