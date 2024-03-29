# Say It Social : 

- Clone of a social Media platform : Twitter 

# Requirements

- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars]
    - [Every post/tweet will be having support for image upload- Using AWS S3]

- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like any comment also
- Retweeting

- User profile:
    - Name
    - Follower count
    - Bio
    - Last 10 tweets from the user

- Pagination on tweets 
- User auth 

- Every tweet might be having a hashtag


# Tech stacks:

- express ( for Node.js server)
- mongoose ( ORM for MongoDb )
- bcrypt ( For Decyrpting & Encrypting user password)
- Passport.js ( For Authentication of user - JWT Token based)
- JEST ( For Unit Testing )

// https://how-to.dev/how-to-set-up-jest-for-es-module

# To Run on Local:

- run `git clone <repo_link>` on your terminal to clone the project on your local.
- run `npm install` to install all the dependencies.
- Install MongoDb & start the service.
- Run `mongosh --port 27017` command on cmd & Open/Connect MpmgoDb Compass.
- Run `npm start` from your project terminal
     we are good to go Now ....
- `npm run test` for unit test to run 
- `npx jest --coverage` for code coverage