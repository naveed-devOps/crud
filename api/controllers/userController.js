// userController.js
const Country = require('../models/countryModel');

// Get all country
exports.getAllCountry = async (req, res) => {
    try {
        const country = await Country.find({});
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
// Get country by Id
exports.getCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        const country = await Country.find({ id: id });
        if (!country) {
            return res.status(404).json({ message: 'country not found' });
        }
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // Get user by Name
// exports.getUserByName = async (req, res) => {
//     const userName = req.params.userName;

//     try {
//         const user = await User.find({ name: userName });
//         if (!user) {
//             return res.status(404).json({ message: 'user not found' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get user by Name
// exports.getUserByAge = async (req, res) => {
//     const userAge = req.params.userAge;

//     try {
//         const user = await User.find({ age: userAge });
//         if (!user) {
//             return res.status(404).json({ message: 'user not found' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// Create a new user

exports.createCountry = async (req, res) => {
    try {
    
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Delete user by ID

exports.deletedCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedCountry = await Country.findOneAndDelete({ id: id });

        if (!deletedCountry) {
            return res.status(404).json({ message: 'Country not found' });
        }

        res.status(200).json({ message: 'Country deleted successfully', deletedCountry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // Delete user by name

// exports.deletedUserByName = async (req, res) => {
//     const userName = req.params.userName;

//     try {
//         const deletedUser = await User.findOneAndDelete({ name: userName });

//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'User deleted successfully', deletedUser });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Delete user by age

// exports.deletedUserByAge = async (req, res) => {
//     const userAge = req.params.userAge;

//     try {
//         const deletedUser = await User.findOneAndDelete({ age: userAge });

//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'User deleted successfully', deletedUser });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// Update country by ID

exports.updatedCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        // Find the existing country by ID and update with the new data
        const updatedCountry = await Country.findOneAndUpdate(
            { id: id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedCountry) {
            return res.status(404).json({ message: 'country not found' });
        }

        res.status(200).json(updatedCountry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// // Update user by name

// exports.updatedUserByName = async (req, res) => {
//     const userName = req.params.userName;

//     try {
//         // Find the existing user by name
//         const existingUser = await User.findOneAndUpdate(
//             { name: userName },
//             req.body,
//             { new: true, runValidators: true }
//         );

//         if (!existingUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Check if request body is empty or undefined
//         if (!req.body || Object.keys(req.body).length === 0) {
//             return res.status(400).json({ message: 'Request body is empty or missing required fields' });
//         }

//         // Update the existing user with the new data
//         Object.assign(existingUser, req.body);

//         // Save the updated user to the database
//         const updatedUser = await existingUser.save();

//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user', error: error.message });
//     }
// };

// // Update user by age

// exports.updatedUserByAge = async (req, res) => {
//     const userAge = req.params.userAge;

//     try {
//         // Find the existing user by name
//         const existingUser = await User.findOneAndUpdate(
//             { age: userAge },
//             req.body,
//             { new: true, runValidators: true }
//         );

//         if (!existingUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Check if request body is empty or undefined
//         if (!req.body || Object.keys(req.body).length === 0) {
//             return res.status(400).json({ message: 'Request body is empty or missing required fields' });
//         }

//         // Update the existing user with the new data
//         Object.assign(existingUser, req.body);

//         // Save the updated user to the database
//         const updatedUser = await existingUser.save();

//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating user', error: error.message });
//     }
// };