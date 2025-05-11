import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify} from 'hono/jwt'

import {blogRouter} from "./routes/blogs";
import {userRouter} from "./routes/users";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
  }
}>();

app.route('/api/v1/user/',userRouter);
app.route('api/v1/blog/',blogRouter);





export default app;
