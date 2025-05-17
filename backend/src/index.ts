import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { cors } from 'hono/cors'
import {blogRouter} from "./routes/blogs";
import {userRouter} from "./routes/users";


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
  }
}>();
app.use('/*',cors())
app.route('/api/v1/user/',userRouter);
app.route('api/v1/blog/',blogRouter);





export default app;
