import Mongoose from 'mongoose';

interface ClassDoc extends Mongoose.Document {
    created: Date

    Moduels: Lecture[][]
    IP: string
}

interface Lecture {
    Title: string
    Information: string
    Assignment: string
}

const ClassSchema = new Mongoose.Schema({});

const Class = Mongoose.model<ClassDoc>(`Class`, ClassSchema);

export {
    Lecture,
    Class,
    ClassDoc
};
