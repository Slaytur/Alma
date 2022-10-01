import { Snowflake } from '@boatgame-io/id-utils';
import Mongoose from 'mongoose';

interface ClassDoc extends Mongoose.Document {
    created: Date
    id: Snowflake

    name: string

    teacher: Snowflake
    students: Snowflake[]

    modules: Lecture[][]
}

interface Lecture {
    title: string
    description: string

    attachments: {
        assignment?: {
            title: string
            description: string
            dueDate: Date
            points: number
        }
        material?: {
            title: string
            description: string
        }
    }
}

const ClassSchema = new Mongoose.Schema({
    created: { type: Date, required: true },
    id: { type: String, required: true },

    teacher: { type: String, required: true, maxlength: 32, unique: true },
    students: { type: String, required: true, maxlength: 32, unique: true },

    modules: { type: String, required: true, maxlength: 32, unique: true }
});

const Class = Mongoose.model<ClassDoc>(`Class`, ClassSchema);

export {
    Lecture,
    Class,
    ClassDoc
};
