import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/Cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats-form',
  templateUrl: './cats-form.component.html',
  styleUrls: ['./cats-form.component.scss']
})
export class CatsFormComponent implements OnInit {

  edit:boolean;
  catData:Cat;
  catsForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private catService:CatService,
    private routeur:Router,
    private activeRoute:ActivatedRoute
    ) { 
      this.activeRoute.params.subscribe(data => {
        if (data.id) {
          this.edit = true;
          this.catService.getById(data.id).subscribe(cat => {
            console.log(cat)
            this.catData = cat;
          })
        } else {
          this.edit = false;
        }
      });
      console.log(this.catData)
    this.catsForm = this.formBuilder.group({
      name: [''],
      age: [''],
      race: [''],
      alife: ['']
    })
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.edit) {
      this.catService.update(this.catData.id, this.catsForm.value).subscribe(() => {
        this.routeur.navigate(['/cats']);
      });
    } else {
      this.catService.create(this.catsForm.value).subscribe(() => {
        this.routeur.navigate(['/cats']);
      });
    }
    
  }

}
