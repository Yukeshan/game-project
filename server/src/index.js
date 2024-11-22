import express from "express"
import cors from "cors"
import {StreamChat} from "stream-chat"
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcrypt"

const app = express();
const API_KEY="v989rq6jhwak";
const API_SECRET="ep4vmqer74txpppcb5hjy6euwnxzws9fj6a85snk4qdwwp3gx6r87fnpfeyttm6w";
const serverClient = new StreamChat.getInstance(API_KEY,API_SECRET);

app.use(express.json());
app.use(cors());


app.post("/signup", async (req,res)=>{
try{
    const {firstName,lastName,username,email,password} = req.body;
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password,10);
    const token = serverClient.createToken(userId);
    res.json(token,userId,firstName,lastName,username,email,hashedPassword);
} catch(error){
    res.json(error);

}
});
app.post("/login");


app.listen(3001,()=>{
    console.log("server is running on port 3001");



})

