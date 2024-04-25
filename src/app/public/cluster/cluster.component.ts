import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrl: './cluster.component.scss'
})
export class ClusterComponent {

  clusterForm = this.formBuilder.group({
    type: ['', [Validators.required]],
    name: ['test', [Validators.required]],
    baseDomain: ['ocp.example.com', [Validators.required]]
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  onSubmit() {

  }

  get controls() : { [p: string]: AbstractControl }{
    return this.clusterForm.controls;
  }

  get apiDns(): string {
    return 'api.' + this.clusterForm.controls.name.value + '.' + this.clusterForm.controls.baseDomain.value;
  }

  get ingressDns(): string {
    return '*.' + this.clusterForm.controls.name.value + '.' + this.clusterForm.controls.baseDomain.value;
  }

}
