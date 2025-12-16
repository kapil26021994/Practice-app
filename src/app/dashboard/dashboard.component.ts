import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
items :any = ['Apple', 'Banana', 'Mango'];
searchText:string= '';

  ngOnInit(): void {
    
}


addItem() {
  this.items.push('New Item');
}
}