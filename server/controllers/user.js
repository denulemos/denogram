// USER CONTROLLER
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (user, SECRET_KEY, expiresIn) => {
    const {id, name, email, username} = user;
    const payload = {id, name, email, username};
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

const register = async(input) => {
        const newUser = input;

        // We convert the email and user to lowercase
        newUser.email = newUser.email.toLowerCase();
        newUser.username = newUser.username.toLowerCase();

        const {email, username, password} = newUser;

        // We check if the email or username already exists
        const foundEmail = await User.findOne({email});
        const foundUsername = await User.findOne({username});

        // If each of them is not null, we throw an Error
        if (foundEmail) throw new Error("Email already exists");
        if (foundUsername) throw new Error("Username already exists");

        // Encrypt the password
        const salt = await bcrypt.genSaltSync(10);
        newUser.password = await bcrypt.hashSync(password, salt);

        // Save the user in the database
        try {
            const user = new User(newUser);
            user.save();
            return user;
        }
        catch (err) {
            console.log(err);
        }

        return null;
}

const login = async(input) => {
    const {email, password} = input;

    // We check if the user exists
    const userFound = await User.findOne({email: email.toLowerCase()});

    if (!userFound) throw new Error("User not found");

    // We check if the password is correct
    const isPasswordCorrect = await bcrypt.compareSync(password, userFound.password);

    if (!isPasswordCorrect) throw new Error("Password is incorrect");

    // We generate the token
    const token = userFound.generateAuthToken();

    
    return {token};
}


module.exports = {register, login};