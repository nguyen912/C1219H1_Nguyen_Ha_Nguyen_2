import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../shared/models/customer";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../shared/services/customer.service";
import {IContract} from "../../shared/models/contract";
import {ContractService} from "../../shared/services/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  contracts: IContract[] = [];
  contractForm: FormGroup;
  isShowForm = false;


  constructor(
    private contractService: ContractService,
    private fb: FormBuilder
  ) {
    this.contractForm = new FormGroup({
      employeeId: new FormControl(),
      customerId: new FormControl(),
      serviceId: new FormControl(),
      startDay: new FormControl(),
      endDay: new FormControl(),
      deposit: new FormControl(),
      total: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.getAllContracts();
  }

  getAllContracts() {
    this.contractService.getAllContracts().subscribe(next => {
      this.contracts = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  onSubmit() {
    if (this.contractForm.valid) {
      const {value} = this.contractForm;
      this.contractService.createContract(value)
        .subscribe(next => {
          this.contracts.unshift(next);
          this.contractForm.reset({
            employeeId: '',
            customerId: '',
            serviceId: '',
            startDay: '',
            endDay: '',
            deposit: '',
            total: ''
          });
        }, error => console.log(error));
    }
  }
}
