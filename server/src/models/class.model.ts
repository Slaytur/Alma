import Mongoose from 'mongoose';

interface ClassDoc extends Mongoose.Document {
    created: Date

    Moduels: Array<Array<Lecture>>
    
    IP: string
}

interface Lecture {
    Title: string;
    Information: string;
    Assignment: string;

}

const ClassSchema = new Mongoose.Schema({
    
});

const User = Mongoose.model<ClassDoc>(`Class`, ClassSchema);

export {
    Lecture,
    ClassDoc
};
