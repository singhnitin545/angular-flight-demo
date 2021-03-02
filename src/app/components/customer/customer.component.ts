import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../shared/services/customer.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  custs: any = [];
  newCustomer: any = {};
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomerList();
  }
  getCustomerList() {
    this.customerService.get().subscribe(res => {
      this.custs = res;
    });
  }
  addNewCustomer() {
    this.customerService.post(this.newCustomer).subscribe(res => {
      console.log(resizeBy);
      this.newCustomer = {};
      this.getCustomerList();
    });
  }
  updateCustomer(id) {
    this.customerService.update(this.newCustomer, id).subscribe(res => {
      console.log(resizeBy);
      this.newCustomer = {};
      this.getCustomerList();
    });
  }
  getCustomerByid(id) {
    this.customerService.getByID(id).subscribe(res => {
      this.newCustomer = res;
    });
  }
  submit() {
    debugger;
    let updateItem = this.custs.find(x => x.id == this.newCustomer.id);
    let index = this.custs.indexOf(updateItem);
    if (index > -1) {
      this.updateCustomer(updateItem.id);
    } else {
      this.addNewCustomer();
    }
  }
  edit(id) {
    this.getCustomerByid(id);
  }
  delete(id) {
    this.customerService.delete(id).subscribe(res => {
      this.getCustomerList();
    });
  }
}
