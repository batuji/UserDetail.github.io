const UserModel = require("../model/UserModel");
//optional for creating

exports.createData = async (req, res) => {
  try {
    const {
      id,
      name,
      username,
      email,
      phone,
      website,
      address: { street, suite, city, zipcode },
      company: { name: companyName, catchPhrase, bs },
    } = req.body;

    // Create a new user with the provided data
    const user = await UserModel.create({
      id: id,
      name: name,
      username: username,
      email: email,
      phone: phone,
      website: website,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
      },
      company: {
        name: companyName,
        catchPhrase: catchPhrase,
        bs: bs,
      },
    });

    // Send a success response with the created user data
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    // Send an error response if something goes wrong
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 3; // Default to 10 items per page if not provided

  try {
    const skip = (page - 1) * limit;
    const totalUsers = await UserModel.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    const users = await UserModel.find().skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: totalPages,
      totalUsers: totalUsers,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
