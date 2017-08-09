import { https } from 'firebase-functions';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

export const server = https.onRequest((req, res) =>
  app.prepare().then(() => handle(req, res)).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  }),
);
