import { ProductType } from "./../../models/productType";
import { Router } from "@angular/router";
import { DataService } from "./../../data.service";
import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from "../../modal-windows/delete/delete.component";



@Component({
  selector: "app-product-type",
  templateUrl: "./product-type.component.html",
  styleUrls: ["./product-type.component.css"]
})
export class ProductTypeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  productType: ProductType[];
  breadcrumb = ["Home"];
  breadcrumbProductType = [];
  closeResult: string;
  deleteProductId: string;
  productTypeId;

  ngOnInit() {
    this.dataService.getProductTypes().subscribe(
      (res: any) => {
        this.productType = res.data;
        console.log("Product types: ", this.productType);
      },
      err => {
        console.log(err);
      }
    );
  }

  listByParentId(productType) {
    if (!productType.leafNode) {
      this.dataService.listByParentId(productType.id).subscribe(
        (res: any) => {
          console.log(res);
          this.productType = res.data;
          this.breadcrumb.push(productType.name);
          this.breadcrumbProductType.push(productType);
          console.log("breadcrumbProductType", this.breadcrumbProductType);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  spliceBreadcrumb(breadcrumb) {
    console.log("productType", breadcrumb);
    console.log("this.productType", this.productType);
    let index = this.breadcrumb.indexOf(breadcrumb);
    this.breadcrumb.splice(index + 1, this.breadcrumb.length - index + 1);
    if (breadcrumb != "Home") {
      let productType = this.breadcrumbProductType.find(item => {
        return item.name == breadcrumb;
      });
      this.listByParentIdBreadCrumb(productType);

      console.log("product type after back", productType);
    } else {
      this.ngOnInit();
    }
  }

  listByParentIdBreadCrumb(productType) {
    if (!productType.leafNode) {
      this.dataService.listByParentId(productType.id).subscribe(
        (res: any) => {
          console.log(res);
          this.productType = res.data;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  open(id) {
    console.log(id);
    // this.router.navigate(['delete', {_id: id}])
   const activeModal =  this.modalService.open(DeleteComponent, {size: 'lg'})
    activeModal.componentInstance.idToBeDeleted = id;
    activeModal.result.then((data) => {
      // on close
    }, (reason) => {
      // on dismiss
    });
  }

  

}