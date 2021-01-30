// @ts-ignore
import { Client } from 'https://deno.land/x/mysql/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';
// @ts-ignore
const client = await new Client().connect({
  username: Deno.env.get('USERNAME'),
  db: Deno.env.get('DB'),
  hostname: Deno.env.get('HOST'),
  password: Deno.env.get('PASSWORD'),
  port: 3306,
});

export default client;
