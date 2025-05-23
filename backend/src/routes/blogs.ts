import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify} from 'hono/jwt'
// Create the main Hono blogRouter

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
    }
    Variables:
        {
            UserId:string
        }
}>();

blogRouter.use('/*', async (c,next)=>{
    const header = c.req.header("authorization")|| "";
    const token = header.split(" ")[1];
    const response  = await verify(token,"someSecret")
    console.log(response)
    if(response.id)
    {
        //@ts-ignore
        c.set("UserId",response.id)
        await next();
    }
    else
    {
        c.status(403);
        return c.json({error: "Not authorized"});
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const content = await prisma.post.findMany({
        select: {
            id:true,
            title: true,
            content: true,
            published: true,
            author:{
                select:{
                id:true,
                name: true,}

            }
        }
        }
    )

    return c.json({content})
})


blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const id = c.req.param("id")

    const blog = await prisma.post.findFirst({
        where: {
            id: id
        },
        select: {
            id:true,
            title: true,
            content: true,
            published: true,
            author:{
                select:{
                    id:true,
                    name: true,}

            }
        }
    })

    return c.json(
        blog)
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    interface ReqType {
        title  :   string
        content : string

    }
    const formatter = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const formattedDate = formatter.format(new Date()).replace(" ", ", ");
    console.log(formattedDate);


    const body:ReqType =await c.req.json()
    const blog = await prisma.post.create({
        data: {
            title:body.title,
            content: body.content,
            published: formattedDate ,
            authorId: c.get("UserId")
        }
    })

    return c.json({
        id:blog.id
    })
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body =await c.req.json()
    const blog = await prisma.post.update({
        where:
            {
                id: body.id
            },
        data: {
            title:body.title,
            content: body.content,
            authorId: c.get("UserId")
        }
    })

    return c.json({
        id:blog.id
    })
})
