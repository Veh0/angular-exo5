import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats-form',
  templateUrl: './cats-form.component.html',
  styleUrls: ['./cats-form.component.scss']
})
export class CatsFormComponent implements OnInit {

  catsForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private catService:CatService,
    private routeur:Router
    ) { 
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
    this.catService.create(this.catsForm.value).subscribe(() => {
      this.routeur.navigate(['/cats']);
    });
  }

}
