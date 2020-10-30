import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/models/Cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats:Cat[];
  displayedColumns: string[] = ['name', 'age', 'race', 'alife', 'actions'];

  constructor(
    private catService:CatService,
    private router:Router
    ) {
    this.catService.findAll().subscribe(data => {
      console.log(data);
      this.cats = data;
    })  
  }

  ngOnInit(): void {
  }

  delete(id:number) {
    this.catService.delete(id).then(() => {
      this.cats = this.cats.filter(cat => cat.id != id)
    })
  }

  catEditForm(id:number) {
    this.catService.getById(id).subscribe(data => {
      this.router.navigate(['cats-form', {data : data}]);
    })
  }

}
