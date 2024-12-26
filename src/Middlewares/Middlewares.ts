import { app } from "../server.js"
import {AdminMiddleware} from "./AdminMiddleware.js"

app.decorate("AdminMiddleware", AdminMiddleware);
// app.register()