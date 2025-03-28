import { Component, OnInit } from '@angular/core';
import { Postage } from '../../models/postage.model';
import { postageService } from '../../services/postage.service';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SmallCardComponent, MenuTitleComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  postagem: Postage[] = [];

  constructor(private service: postageService) { }

  ngOnInit(): void {
    this.service.getPostage().subscribe({
      next: (data: Postage[]) => {
        console.log(data)
        this.postagem=data;
      }
    })
  }

}
