const { TweetRespository, HashtagRepository } = require('../repository/index')

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRespository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts all hashtags in that tweet
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags); // find all the tags already present in Hashtag Db
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        }); // create data for new tags and tweet id with it 
        await this.hashtagRepository.bulkCreate(newTags); // bulk create all the tags and add it to DB
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id); // update the tweet id into already present tags
            tag.save();
        });
        return tweet;
    }
}

module.exports = TweetService;

/*
    this is my #first #tweet . I am really #excited
*/