import { Component, OnInit } from '@angular/core';
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

  constructor(private catService:CatService) {
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

}
