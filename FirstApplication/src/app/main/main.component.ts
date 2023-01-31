import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  display:boolean=false;
  myValue=1;

   eList = [
    { Name: 'Tayyab', Salary: 1011200, Address: "SKP" },
    { Name: 'Abdullah', Salary: 124420, Address: "LHR" },
    { Name: 'Talha', Salary: 1313, Address: "ASD" },
    { Name: 'Zaid', Salary: 4124, Address: "das" },
    { Name: 'XYZ', Salary: 1214, Address: "asd" },
];

refresh():void{
  this.eList = [
    { Name: 'Tayyab', Salary: 1011200, Address: "SKP" },
    { Name: 'Abdullah', Salary: 124420, Address: "LHR" },
    { Name: 'Talha', Salary: 1313, Address: "ASD" },
    { Name: 'Zaid', Salary: 4124, Address: "das" },
    { Name: 'XYZ', Salary: 1214, Address: "asd" },
    { Name: 'XYZ', Salary: 545, Address: "sdf" },
    { Name: 'asd', Salary: 1435, Address: "trh" },
    { Name: 'sdf', Salary: 1231, Address: "aasfsd" },

];

}

refreshEmployees(index: number, list:any): string{
  return list.Name
}


  source:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  closeNoti(){
    this.display = true
  }
}
