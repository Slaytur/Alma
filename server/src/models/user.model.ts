import Mongoose from 'mongoose';
import { Snowflake } from '@boatgame-io/id-utils';

interface UserDoc extends Mongoose.Document {
    created: Date
    IP: string
    id: Snowflake

    username: string
    email: string
    avatar?: string
}

const UserSchema = new Mongoose.Schema({
    created: { type: Date, required: true },
    IP: { type: String, required: true },
    id: { type: String, required: true },

    username: { type: String, required: true, maxlength: 32, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: false }
});

const User = Mongoose.model<UserDoc>(`User`, UserSchema);

export {
    User,
    UserDoc
};
