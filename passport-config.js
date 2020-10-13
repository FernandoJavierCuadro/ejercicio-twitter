const LocalStrategy = require("passport-local").Strategy;
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

  passport.serializeUser(function (User, done) {
    done(null, User._id);
  });

  passport.deserializeUser(function (_id, done) {
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
