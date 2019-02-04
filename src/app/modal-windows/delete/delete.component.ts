import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { DataService } from "./../../data.service";
import { NgbModule, NgbModal, NgbModalRef, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  
  constructor(
    private _dataService: DataService,
    private _modal: NgbModal,
    route: ActivatedRoute
  ) {
    route.params.subscribe(id => {
      console.log('navigated id:', id._id);
      this.idToBeDeleted=id._id;
    });
   }

  ngOnInit() {
    this.openDeleteModal();    
  }

  @ViewChild('deleteProduct') deleteModal: TemplateRef<any>;
  idToBeDeleted: string;

  deleteProductById() {
    console.log('called');
    
    this._dataService.deleteProduct(this.idToBeDeleted).subscribe((res: any) => {
      alert(res.message)
    }, err => {
      console.log(err);      
    })

    this.close();

  }

  openDeleteModal(){
    this._modal.open(this.deleteModal, { size: 'lg', backdrop: 'static'})
  }

  close(){
    this._modal.dismissAll();
  }
  

}
