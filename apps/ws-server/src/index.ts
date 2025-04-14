import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/prisma/client";

const wss= new WebSocketServer({port:3001})



wss.on("connection", async function(ws){
    await prismaClient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    ws.send( "connected to ws server")
    
})
