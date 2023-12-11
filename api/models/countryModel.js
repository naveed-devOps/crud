const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
 
const CountrySchema = mongoose.Schema({
     id: {
      type: String,
       required: true,
       unique: true
     },
    countryName: {
        type: String,
        required: true
      },
      countryCode: {
        type: String,
      },
      phoneCode: {
        type: String,
      },
      timeZone: {
        type: String,
      },
    }, { timestamps: true });

// // Hash the password before saving to the database
// userModel.pre('save', async function (next) {
//     try {
//         if (!this.isModified('password')) {
//             return next();
//         }

//         // Prefix the password with '#' if it doesn't start with it
//         if (!this.password.startsWith('#')) {
//             this.password = '#' + this.password;
//         }

//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// // Generate a JWT token for authentication
// userModel.methods.generateAuthToken = function () {
//     const token = jwt.sign(
//         { _id: this._id, email: this.email },
//         '123',   // Replace with a secure secret key
//         { expiresIn: '1h' }
//     );
//     return token;
// };

// // Generate a reset token for password reset
// userModel.methods.generateResetToken = function () {
//     const resetToken = jwt.sign(
//         { userId: this._id },
//         '123', // Replace with a secure reset secret key
//         { expiresIn: '1h' }
//     );
//     this.resetToken = resetToken;
//     this.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
//     return resetToken;
// };

const country = mongoose.model('country', CountrySchema);
module.exports = country;
