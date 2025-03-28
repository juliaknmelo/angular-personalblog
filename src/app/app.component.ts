import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { postageService } from './services/postage.service';
import { Postage } from './models/postage.model';
import { HttpClientModule } from '@angular/common/http';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogfront';

  postages: Postage[] = [];

  constructor(private postageService: postageService){
    this.getPostages();
  }

  getPostages(){
    this.postageService.getPostage()
    .subscribe(postages => this.postages = postages)
  }
}
