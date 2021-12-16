import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestapp:nestapp@cluster0.mhktj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    UsersModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
