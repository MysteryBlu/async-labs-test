import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedModel } from './models/feed/FeedModel';
import { AthleteModel } from './models/feed/AthleteModel';
import { CountryModel } from './models/feed/CountryModel';
import { SportModel } from './models/feed/SportModel';
import { AuthorModel } from './models/feed/AuthorModel';
import { SportGroupModel } from './models/feed/SportGroupModel';
import { VideoModel } from './models/feed/VideoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  posts: FeedModel[];

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.loadData();
  }

  private loadData(){
    this.http.get(
      "https://private-anon-a6c27e284d-technicaltaskapi.apiary-mock.com/feed?page=2&sport=football"
    ).subscribe((response: Array<any>) => {
      let data: FeedModel[] = [];// = <FeedModel[]>{};
      this.posts = response.map(x => <FeedModel>{
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
      })
    })
  }
}
