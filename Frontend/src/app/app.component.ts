import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';

  constructor(private router: Router){}
  

  navegaHome(){
    this.router.navigate([''])
  }
  navegaPersonagens(){
    this.router.navigate(['/personagens'])
  }
  navegaMonstros(){
    this.router.navigate(['/monstros'])
  }

  

}
