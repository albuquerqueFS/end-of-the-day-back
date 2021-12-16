import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './note';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async listAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async create(note: Note): Promise<Note> {
    const noteCreated = new this.noteModel(note);
    return noteCreated.save();
  }

  async searchById(id: string): Promise<Note> {
    return this.noteModel.findById(id).exec();
  }

  async update(id: string, note: Note): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, note).exec();
  }

  async remove(id: string) {
    const deletedNote = this.noteModel.findOneAndDelete({ _id: id }).exec();
    return (await deletedNote).remove();
  }
}
