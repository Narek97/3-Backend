import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreatTrackDto } from './dto/creat-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreatTrackDto): Promise<Track> {
    console.log(dto);
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find();
    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);

    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }
}
