import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Note } from './note';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async listAll(): Promise<Note[]> {
    return this.notesService.listAll();
  }

  @Post()
  async create(@Body() note: Note): Promise<Note> {
    return this.notesService.create(note);
  }

  @Get(':id')
  async searchById(@Param('id') id: string): Promise<Note> {
    return this.notesService.searchById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedNote: Note,
  ): Promise<Note> {
    return this.notesService.update(id, updatedNote);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Note> {
    return this.notesService.remove(id);
  }
}
