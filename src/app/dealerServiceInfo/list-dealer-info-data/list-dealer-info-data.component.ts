import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Routes, RouterModule, Router } from '@angular/router';
import { error } from 'protractor';
import { DealerServiceInfoModelDTO, UserEmailInfoInputValueDTO } from 'src/app/models/dealerServiceInfoModel';
import { DealerServiceService } from '../dealer-service.service';

@Component({
  selector: 'app-list-dealer-info-data',
  templateUrl: './list-dealer-info-data.component.html',
  styleUrls: ['./list-dealer-info-data.component.css']
})
export class ListDealerInfoDataComponent implements OnInit {

  @Input()
  data: any = [];

  dealerServiceData: DealerServiceInfoModelDTO[] = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
 
  }

  getdata(data: any){
    this.dealerServiceData = this.data
  }

  columnsToShow = ['userId', 'firstName', 'lastName', 'action'];
  totalRecordsQty: number;
  currentPage = 1;
  RecordsToShowQty = 10;

}
