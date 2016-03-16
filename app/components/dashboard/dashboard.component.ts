import {Component, OnInit} from 'angular2/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private _heroService: HeroService) {}
  ngOnInit() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }
  gotoDetail() {

  }
}
