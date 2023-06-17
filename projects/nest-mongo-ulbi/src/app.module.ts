import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://narek:narek123@cluster0.mkncsnu.mongodb.net/music-db?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
