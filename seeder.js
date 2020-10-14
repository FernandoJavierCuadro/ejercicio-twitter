const faker = require("faker");

const usersSeed = (mongoose, User) => {
  /* for (i = 0; i < 4; i++) {
    const user = new User({
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: "admin123",
      description: faker.lorem.paragraph(),
      image: faker.image.imageUrl(),
    });
    user.save();
  } */
};

const tweetsSeed = (mongoose, Tweet) => {
  /* for (i = 0; i < 20; i++) {
    const tweet = new Tweet({
      text: faker.lorem.words(),
      author: "5f860ac2dc5d06548c273ddd",
    });
    tweet.save();
  } */
};

module.exports = { usersSeed, tweetsSeed };
