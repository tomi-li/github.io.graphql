/**
 * All Codes below are Lifetime Warranted by Tomi since 28/02/2017.
 */

import Sequelize from 'sequelize';
import casual  from 'casual';
import * as _ from 'lodash';


const db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite'
});

const AuthorModel = db.define('author', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
});


const PostModel = db.define('post', {
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    creationDate: { type: Sequelize.DATE, defaultValue: () => new Date().getTime() }
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// db.sync({ force: true }).then(() => {
//     _.times(10, () => {
//         return AuthorModel.create({
//             firstName: casual.first_name,
//             lastName: casual.last_name
//         }).then(author => {
//             return author.createPost({
//                 title: casual.title,
//                 content: casual.sentences(3)
//             })
//         });
//     })
// });


const Author = db.models.author;
const Post = db.models.post;

export { Author, Post };