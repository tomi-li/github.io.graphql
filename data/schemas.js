import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const schema = `
type Query {
    author(firstName: String, lastName: String): Author
    authors(limit: Int, offset: Int): [Author]
    posts(limit: Int, offset: Int): [Post]
    post(id: Int): Post
}

type Mutation {
    post(title: String, content: String): Post
}

type Author {
    id : Int
    firstName : String,
    lastName : String,
    posts: [Post]
}

type Post {
    id : Int
    title: String,
    content: String,
    author: Author
}

`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers,
});