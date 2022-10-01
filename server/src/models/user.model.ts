import Mongoose from 'mongoose';

interface UserDoc extends Mongoose.Document {
    created: Date

    username: string
    email: string
    avatar?: string

    enrolled: string[]
    IP: string
}

const UserSchema = new Mongoose.Schema({
    created: { type: Date, required: true },

    username: { type: String, required: true, maxlength: 32, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: false },

    IP: { type: String, required: false }
});

const User = Mongoose.model<UserDoc>(`User`, UserSchema);

export {
    User,
    UserDoc
};
