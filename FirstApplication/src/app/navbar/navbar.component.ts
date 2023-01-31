import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    searchValue:string="Iphone";
    changeSearchValue(eventData: Event){
        console.log((<HTMLInputElement>eventData.target).value)
        this.searchValue = (<HTMLInputElement>eventData.target).value
    }
}
