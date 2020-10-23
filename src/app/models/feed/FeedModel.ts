import { AthleteModel } from './AthleteModel';
import { AuthorModel } from './AuthorModel';
import { SportGroupModel } from './SportGroupModel';
import { VideoModel } from './VideoModel';

export interface FeedModel {
  id: number;
  athlete: AthleteModel;
  author: AuthorModel;
  bookmarked: boolean;
  createdAt: Date;
  createdBefore: string;
  description: string;
  sportGroup: SportGroupModel;
  video: VideoModel;
  views: string;
}
