import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { error } from "../middlewares/error.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(error(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
