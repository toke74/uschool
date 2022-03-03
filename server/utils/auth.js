import bcrypt from "bcrypt";

// Encrypt password using bcrypt
export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// Match user entered password to hashed password in database
export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed); // boolean
};
