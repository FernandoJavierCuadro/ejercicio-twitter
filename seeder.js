const faker = require("faker");

const usersSeed = (mongoose, User) => {
  /* for (i = 0; i < 10; i++) {
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
