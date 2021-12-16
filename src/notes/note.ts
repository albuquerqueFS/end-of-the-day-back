import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
  @Prop()
  title: string;
  @Prop()
  textContent: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
