/**
 * All Codes below are Lifetime Warranted by Tomi since 28/02/2017.
 */

import { Author, Post } from './connectors';


const resolvers = {
    Query: {
        author: (_, args) => {
            return Author.find({ where: args });
        },
        authors: (_, args) => {
            return Author.findAll(args);
        },
        posts: (_, args) => {
            return Post.findAll(args)
        },
        post: (_, args) => {
            return Post.find({ where: args });
        }
    },
    Mutation: {
        post: (_, args) => {
            return Post.create(args);
        }
    },
    Author: {
        posts: (author) => {
            return author.getPosts();
        }
    },
    Post: {
        author: (post) => {
            return post.getAuthor();
        }
    }
};


export default resolvers;