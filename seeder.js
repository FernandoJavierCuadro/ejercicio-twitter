const faker = require("faker");

const usersSeed = (mongoose, User) => {
  for (i = 0; i < 10; i++) {
    const user = new User({
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.internet.userName(),
      description: faker.lorem.paragraph(),
      email: faker.internet.email(),
      img: faker.image.imageUrl(),
    });
    user.save();
  }
};

const tweetsSeed = (arr) => {
  let fakeComments = [];
  for (i = 0; i < 20; i++) {
    fakeComments[i] = {
      text: faker.lorem.words(),
    };
  }
  return fakeComments;
};

module.exports = { usersSeed, tweetsSeed };
