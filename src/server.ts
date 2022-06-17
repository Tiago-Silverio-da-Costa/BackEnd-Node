import "reflect-metadata";
import express, { json } from "express";
import "./database";
import { router } from "./routes";
import "express.async-errors";
import cors from "cors"

const app = express();
// ele vai habilitar que outras fontes que n seja aplicações backend consigam acessar sua aplicação, por padrão vc n consegue  
//se vc tiver sua aplicação habilitada para receber requisições de fora, ent dentro do cors, por exemplo posso passar um origin 
// se vc quiser passar um site, um ip
app.use(cors(
    // {
    // origin: 
    // }
));

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: Nextfunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("server is running"));
