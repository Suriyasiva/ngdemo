import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;

  constructor(private formBuilder: FormBuilder) {


    this.chartOptions = {
      series: [this.getTotalAmount(), this.getPrincipleAmount],
      chartOptions: {
        labels: ['Apple', 'Mango']
      },
      chart: {
        width: 380,
        type: "pie"
      }

    };







  }

  stepperIndex: number = 1;

  userForm = this.formBuilder.group({
    // user details
    userName: ['suriya', [Validators.required]],
    email: ['suriya3098@gmail.com', [Validators.email, Validators.required]],
    contactNumber: ['9789412582', [Validators.required]],
    gender: ['male', [Validators.required]],
    maritalStatus: ['single', [Validators.required]],
    dob: [new Date('11/30/1998'), [Validators.required]],
    address: this.formBuilder.group({
      street: ['main road', [Validators.required]],
      city: ['chidambaram', [Validators.required]],
      state: ['tamil nadu', [Validators.required]],
      zipCode: ['608602', [Validators.required, Validators.minLength(6)]],
    }),

    // record data
    loanDetails: this.formBuilder.group({

      originalName: ['suriya s', [Validators.required]],

      loanType: ['percentage'],

      principalAmount: [1000],
      timePeriodDetails: this.formBuilder.group({
        timePeriodType: ['year'],
        timePeriod: [1]
      }),
      rateOfInterest: [1],
      debtorDetails: this.formBuilder.array([]),
      suretyDetails: this.formBuilder.array([])

    }),

    //Surety data

    isAgreedTerms: [''],
  });

  get debtorDetails() {

    return (this.userForm.get("loanDetails.debtorDetails") as FormArray).controls;

  }

  get suretyDetails() {

    return (this.userForm.get("loanDetails.suretyDetails") as FormArray).controls;

  }

  get getPrincipleAmount(): any {

    return this.userForm.get('loanDetails.principalAmount')?.value

  }

  get getTotalInterest(): any {

    return this.userForm.get('loanDetails.rateOfInterest')?.value

  }

  get getTimePeriodType() {

    return this.userForm.get('loanDetails.timePeriodDetails.timePeriodType')?.value

  }

  get getTimePeriod(): any {

    return this.userForm.get('loanDetails.timePeriodDetails.timePeriod')?.value

  }

  get getLoanType(): any {
    return this.userForm.get('loanDetails.loanType')?.value;

  }

  onAddDebtorFileClick(event: any, index: number) {
    // console.log('event :>> ', event,index);

    const deptorForm = (<FormArray>this.userForm.get('loanDetails.debtorDetails')).at(index);

    deptorForm.patchValue({
      document: event
    })

  }

  addDebtorDetails() {

    let dep = this.userForm.get('loanDetails.debtorDetails') as FormArray;




    const debtorFormGroup = this.formBuilder.group({
      docName: [''],
      docDescription: [''],
      document: ['']
    })

    dep.push(debtorFormGroup)

    // this.debtorDetails.push(debtorFormGroup)


  }

  addSuretyDetails() {

    const suretyFormGroup = this.formBuilder.group({
      docName: [''],
      docDescription: [''],
      document: ['']
    })

    this.suretyDetails.push(suretyFormGroup)

  }

  totalAmountForPercenatge() {



    const _getTimePeriodType = this.getTimePeriodType;

    let ri: any;







    switch (_getTimePeriodType) {
      case 'year':


        ri = this.getTotalInterest / 100

        return this.getPrincipleAmount * ri * this.getTimePeriod


      case 'month':

        ri = this.getTotalInterest / 100

        return this.getPrincipleAmount * ri * this.getTimePeriod * 12;




      case 'day':

        ri = this.getTotalInterest / 100

        return this.getPrincipleAmount * ri * this.getTimePeriod * 365;



      default:

        return;


    }









  }

  totalAmountForRupee() {

    const _getTimePeriodType = this.getTimePeriodType;

    const getHundreds = this.getPrincipleAmount / 100;

    const interestInRupee = this.getTotalInterest;

    const timePeriod = this.getTimePeriod;


    switch (_getTimePeriodType) {
      case 'year':

        return getHundreds * interestInRupee * timePeriod * 12;

      case 'month':

        return getHundreds * interestInRupee * timePeriod;

      case 'day':

        const totalAmountForOneMonth = getHundreds * interestInRupee * 1;

        const totalAmountForOneDay = totalAmountForOneMonth / 30;

        return totalAmountForOneDay * timePeriod

      default:
        return;
    }

  }

  totalAmountForPaisa() {

    const _getTimePeriodType = this.getTimePeriodType;

    let ri: any;

    // switch (key) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }

  }

  getTotalAmount() {


    const isPercentageLoanType = this.getLoanType === 'percentage';

    const isRupeeLoanType = this.getLoanType === 'rupee';

    const isPaisaLoanType = this.getLoanType === 'paisa';

    if (isPercentageLoanType) {

      return this.totalAmountForPercenatge()

    } else if (isRupeeLoanType) {

      return this.totalAmountForRupee()

    } else if (isPaisaLoanType) {

      return this.totalAmountForPaisa()

    } else {
      return
    }

  }

  handleSubmit() {
    // alert(JSON.stringify(this.userForm.value, null, 2));
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


}
