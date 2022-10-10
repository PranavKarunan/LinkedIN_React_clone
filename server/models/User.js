import mongoose from "mongoose";
const schema = mongoose.Schema;

const UserSchema = schema(
  {
    firstName: String,
    lastName: String,
    mobileNumber:{ type: Number ,required:true , unique:true},
    email: { type: String, trim: true, lowercase: true },
    password: {type:String, required:true},
    address: [
      {
        homeAddress: String,
        landMark: String,
        pincode: Number,
        area: String,
      },
    ],
    job: String,
    isBlocked: Boolean,
    isAdmin:{
      type:Boolean, default:false
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
