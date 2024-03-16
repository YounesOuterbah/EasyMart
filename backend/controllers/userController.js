import { User } from "../models/User.js";
import { errorMiddleware } from "../middlewares/errorMiddle.js";

export const updateUser = async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
      },
    },
    { new: true }
  ).select("-password");

  res.status(200).json(updatedUser);
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorMiddleware(401, "You can delete only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    next(error);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User has been deleted", deletedUser });
  } catch (error) {
    next(error);
  }
};
