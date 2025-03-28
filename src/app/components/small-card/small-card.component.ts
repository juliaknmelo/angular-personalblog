import { Component, Input, OnInit } from '@angular/core';
import { postageService } from '../../services/postage.service';
import { Postage } from '../../models/postage.model';
import { url } from 'inspector';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
  // baseImage = [
  //   {
  //     id:1,
  //     url: "../../../assets/materia1.jpg"
  //   },
  //   {
  //     id:2,
  //     url: "../../../assets/materia2.png"
  //   },
  //   {
  //     id:3,
  //     url: "../../../assets/materia3.jpg"
  //   },
  //   {
  //     id:4,
  //     url: "../../../assets/materia4.jpg"
  //   },
  //   {
  //     id:5,
  //     url: "../../../assets/materia5.jpg"
  //   }
  // ]

  @Input()
  cardTitle: string = '';

  @Input()
  cardText: string = '';

  @Input()
  cardThemeDesc: string = '';

  @Input()
  cardThemeId: number = 0;

  constructor(private service: postageService) {}

  ngOnInit(): void {}


}
