import express from 'express'
import cors from 'cors'
const app= express()
import { prismaClient } from "@repo/prisma/client";

app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.json({message:"hi there"})
})


app.post("/signup", async(req,res)=>{
    const {username,password}= req.body

    const user= await prismaClient.user.create({
        data:{ 
            username: username,
            password:password
        }
    })
    
    res.json({message:"signup done", id:user.id})

} )


app.listen(3002,()=>{console.log("listening at 3000")})