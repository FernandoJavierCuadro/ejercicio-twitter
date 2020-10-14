const faker = require("faker");

const usersSeed = (mongoose, User) => {
  /* for (i = 0; i < 5; i++) {
    const user = new User({
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: "admin123",
      description: faker.lorem.paragraph(),
      image: "https://randomuser.me/api/portraits/men/"+ (Math.floor(Math.random() * 200)) +".jpg",
    });
    user.save();
  } */
};

const tweetsSeed = (mongoose, Tweet) => {
  /* for (i = 0; i < 10; i++) {
    const tweet = new Tweet({
      text: faker.lorem.words(),
      author: "5f87353e4b65222494d60d9e",
    });
    tweet.save();
  } */
};

module.exports = { usersSeed, tweetsSeed };
