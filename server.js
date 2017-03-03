import express from 'express';
import schema from './data/schemas';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import { graphiqlExpress } from 'graphql-server-express';
import cors from 'cors';

const PORT = 3000;
const app = express();
app.use(cors());

app.use('/g', graphiqlExpress({
    endpointURL: '/',
}));


app.use('/',
    bodyParser.json(),
    graphqlExpress({
        schema: schema
    })
);


app.listen(PORT);