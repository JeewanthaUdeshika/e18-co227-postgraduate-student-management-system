const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!!'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!!'],
    unique: true,
    // All the characters in the email will be lowercase
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
    default: 'user.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on SAVE!
      // Only works when we create a new obj (.save() and .create())
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords do not match with each other',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// pre saving modifier
// runs between the moment of the document creation and saving it to the database
userSchema.pre('save', async function (next) {
  // runs if and only if the password field has been modified
  // we only want to encrypt the password if it has been changed or created
  if (!this.isModified('password')) {
    // If the field is not modified then go to next() middleware
    return next();
  }

  // else
  // encrypt the password
  this.password = await bcrypt.hash(this.password, 12);

  // Set the confirm pass to undefined(delete this field)
  this.passwordConfirm = undefined;

  // Go to the next middleware
  next();
});

// passwordChangedAt update
userSchema.pre('save', function (next) {
  // Only update the passwordChangdAt property if and only if
  // it's new doc or password field has been updated
  if (!this.isModified('password') || this.isNew) {
    return next();
  }
  // Subtract 1second to keep the password upadate time as a fresh
  // to always get the token after password has been changed
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Password compare
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changesPasswordAfter = function (JWTtimestamp) {
  if (this.passwordChangedAt) {
    // convert the date to seconds and typecast to base 10 int value
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // console.log(changedTimestamp, JWTtimestamp);

    return JWTtimestamp < changedTimestamp;
  }

  // False means not changed
  return false;
};

//
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);
  // will be expired after 10 mins
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // we need to send the plain text via email
  return resetToken;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
