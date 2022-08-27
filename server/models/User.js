const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  provincia: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  ordenes: {
    type: Array,
    default: [],
  },
  salt: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Schema Hook => hash de la password y creacion del salt del usuario
UserSchema.pre("save", async function () {
  this.salt = bcrypt.genSaltSync();
  return (this.password = await bcrypt.hash(this.password, this.salt));
});

module.exports = mongoose.model("User", UserSchema);
