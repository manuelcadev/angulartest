import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerServiceService } from 'src/app/dealerServiceInfo/dealer-service.service';
import { DealerServiceInfoModelDTO, UserEmailInfoInputValueDTO } from 'src/app/models/dealerServiceInfoModel';
import { parseAPIErrors } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private dealerDataService: DealerServiceService) { }

  @Output()
  OnSubmit: EventEmitter<DealerServiceInfoModelDTO[]> = new EventEmitter<DealerServiceInfoModelDTO[]>();

  dealerInfo: UserEmailInfoInputValueDTO = {Email: '', UserId: 0};
  data: DealerServiceInfoModelDTO[]= [];


  ngOnInit(): void {
  }
  dealerServiceData: DealerServiceInfoModelDTO[] = [];
  columnsToShow = ['userId', 'firstName', 'lastName', 'action'];
  totalRecordsQty: any;
  currentPage = 1;
  RecordsToShowQty = 10;

  searchDealerInfoData(email: any) {
    this.dealerServiceData = [];
    this.dealerInfo.Email = email
    this.dealerDataService.getAll(this.dealerInfo)
    .subscribe((res: HttpResponse<DealerServiceInfoModelDTO[]>) => {
      this.dealerServiceData = res.body;
      this.OnSubmit.emit(this.dealerServiceData);
      this.router.navigate(['/listDealerServiceInfoPage']);
      //this.totalRecordsQty = res.headers.get("totalRecordsQty");
    }, error => this.errors = parseAPIErrors(error));
  }

}