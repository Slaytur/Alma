import Mongoose from 'mongoose';
import { Snowflake } from '@boatgame-io/id-utils';

interface UserDoc extends Mongoose.Document {
    created: Date
    id: Snowflake

    username: string
    email: string
    discordID: string
    avatar?: string

    settings: {
        darkMode: boolean
    }
}

const UserSchema = new Mongoose.Schema({
    created: { type: Date, required: true },
    id: { type: String, required: true },

    username: { type: String, required: true, maxlength: 32, unique: true },
    email: { type: String, required: true, unique: true },
    discordID: { type: String, required: true, unique: true },
    avatar: { type: String, required: false },

    settings: {
        darkMode: { type: Boolean, required: false, default: false }
    }
});

const User = Mongoose.model<UserDoc>(`User`, UserSchema);

export {
    User,
    UserDoc
};
