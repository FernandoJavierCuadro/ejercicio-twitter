const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const db = require("./db");

function strategy(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        db.User.findOne({ email: email })
          .then(async function (User) {
            if (!User) {
              return done(null, false, { message: "Incorrect email." });
            }
            if (!(await User.validPassword(password))) {
              return done(null, false, { message: "Incorrect password." });
            }
            return done(null, User);
          })
          .catch((error) => {
            done(error);
          });
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "first_name", "last_name", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        db.User.findOne({
          where: { email: profile._json.email },
        }).then(
          function (user) {
            return done(null, user);
          });
      }
    )
  );

  passport.serializeUser(function (User, done) {
    done(null, User._id);
  });

  passport.deserializeUser(function (id, done) {
    db.User.findById(_id)
      .then((User) => {
        done(null, User);
      })
      .catch((error) => {
        done(error);
      });
  });
}

module.exports = strategy;
