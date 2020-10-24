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
  posts: FeedModel[] = [];
  sports: SportModel[] = [];

  selectedSport: SportModel;
  selectedPage: number = 1;

  constructor(
    private http: HttpClient
    ){
  }

  ngOnInit(){
    this.loadSports();
    this.loadFeed(this.selectedPage, null);
  }

  private loadFeed(page: number, sport: string){
    this.http.get(
      `/feed?page=${page}&sport=${sport}`
    ).subscribe((response: any) => {
      this.posts = FeedModel.parseObject(response); //a bit different logic is content is scrollable, not paginated
    })
  }

  private loadSports(){
    this.http.get(
      '/sport'
      ).subscribe((response: any) => {
        this.sports = SportModel.parseObject(response);
        this.sports.unshift(<SportModel>{
          name: "-",
          slug: null
        });
      });
  }

  public onSportFilterChange(){
    this.loadFeed(this.selectedPage, this.selectedSport.slug);
  }

  public login(){
    //TODO: Login component
  }

  public onPageChange(pageNumber: any){
    this.selectedPage = pageNumber;
    this.loadFeed(this.selectedPage, this.selectedSport.slug);
  }
}
