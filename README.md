# CMHack

CMHack is a simple CMS written during the final live coding period of second phase at Hacktiv8. 
With this CMS you'll be able to have a blog with multiple users.

You don't have to sign in to read the blog, but you have to do that in order to write a post.

## Server

### Authentication & Authorization
|Route|HTTP|Description|
|-----|----|-----------|
|`/signup`|POST|Usersignup|
|`/signin`|POST|Usersignin|

### Article routes:
|Route|HTTP|Description|
|-----|----|-----------|
|`/articles/`|GET|Getallarticles|
|`/articles`|POST|Createanewarticle|
|`/articles/:id`|PUT|Editthearticle|
|`/articles/:id`|DELETE|Deletethearticle|

### Tools
- Nodejs
- Express
- Mongoose

## Client
