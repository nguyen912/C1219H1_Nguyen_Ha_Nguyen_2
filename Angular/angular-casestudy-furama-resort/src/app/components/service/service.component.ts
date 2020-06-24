import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../shared/models/customer";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../shared/services/customer.service";
import {IService} from "../../shared/models/service";
import {ServiceService} from "../../shared/services/service.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services: IService[] = [];
  serviceForm: FormGroup;
  isShowForm = false;


  constructor(
    private serviceService: ServiceService,
    private fb: FormBuilder
  ) {
    this.serviceForm = new FormGroup({
      serviceId: new FormControl(),
      serviceName: new FormControl(),
      roomArea: new FormControl(),
      floors: new FormControl(),
      maxPeople: new FormControl(),
      rentCost: new FormControl(),
      rentTypeId: new FormControl(),
      status: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(next => {
      this.services = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      const {value} = this.serviceForm;
      this.serviceService.createService(value)
        .subscribe(next => {
          this.services.unshift(next);
          this.serviceForm.reset({
            serviceId: '',
            serviceName: '',
            roomArea: '',
            floors: '',
            maxPeople: '',
            rentCost: '',
            rentTypeId: '',
            status: ''
          });
        }, error => console.log(error));
    }
  }

}
