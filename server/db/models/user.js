const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          console.log(value);
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password can't include password");
        }
        if (value.length < 6) {
          throw new Error('Password must be at least 6 characters long.');
        }
      }
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: String
    },
    phonenumber: {
      type: String
    },
    businessInfo: {
      businessName: {
        type: String,
        required: true
      },
      description: {
        type: Boolean,
        default: false
      },
      contactInfo: {
        type: String
      },
      verification: {
        type: Object
      },
      license: {
        type: Object
      },
      location: {
        type: String
      },
      category: {
        type: String
      }
    },
    favorites: [
      {
        description: {
          type: String,
          required: true
        },
        contactInfo: {
          type: Boolean,
          default: false
        },
        location: {
          type: String
        },
        category: {
          type: String
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
