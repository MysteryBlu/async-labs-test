import { AthleteModel } from './AthleteModel';
import { AuthorModel } from './AuthorModel';
import { CountryModel } from './CountryModel';
import { SportGroupModel } from './SportGroupModel';
import { SportModel } from './SportModel';
import { VideoModel } from './VideoModel';

export class FeedModel {
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

  public static parseObject(response: any): FeedModel[]{
    return response.map(x => <FeedModel>{
      athlete: <AthleteModel>{
        age: x.athlete.age,
        avatar: x.athlete.avatar,
        club: x.athlete.club,
        country: <CountryModel>{
          icon: x.athlete.country.icon,
          id: x.athlete.country.id,
          name: x.athlete.country.name,
          slug: x.athlete.country.slug
        },
        id: x.athlete.id,
        isCelebrity: x.athlete.isCelebrity,
        name: x.athlete.name,
        sport: <SportModel>{
          icon: x.athlete.sport.icon,
          id: x.athlete.sport.id,
          name: x.athlete.sport.name,
          slug: x.athlete.sport.slug
        }
      },
      author: <AuthorModel>{
        id: x.author.id,
        name: x.author.name
      },
      bookmarked: x.bookmarked,
      createdAt: x.createdAt,
      createdBefore: x.createdBefore,
      description: x.description,
      id: x.id,
      sportGroup: <SportGroupModel>{
        id: x.sportGroup.id,
        name: x.sportGroup.name
      },
      video: <VideoModel>{
        handler: x.video.handler,
        length: x.video.length,
        poster: x.video.poster,
        type: x.video.type,
        url: x.video.url
      },
      views: x.views
    });
  }
}
