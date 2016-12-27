import { Component } from '@angular/core';
// import { UserRegistrationComponent } from '../registration/user/userRegistration.component';
import { FakeStepsService } from '../services/step/FakeStepsService';
import { StepsService } from '../services/step/StepsService';
import { Http } from '@angular/http';
// import { HoistingComponent } from "../steps/hoisting/hoisting.component";
import { StepEnum } from '../../assets/models/enums/StepEnum';

@Component({
    providers: [{
        provide: StepsService,
        useFactory: (IS_PROD: boolean, http: Http) => IS_PROD ? new StepsService(http) : new FakeStepsService(),
        deps: ['IS_PROD', Http]
    }],
    selector: 'home-cmp',
    template: `
    <div class="jumbotron text-center">
        <h1>Know your</h1>
        <h1><i class="icon ion-social-javascript accent-color"></i><small class="ml5">kills</small></h1>
        <button [routerLink]="['/step/', currentStepNumber+1]" class="btn btn-primary btn-lg"><i class="fa fa-sign-in"></i> Commencer</button>
    </div>
    `,
    // directives: [UserRegistrationComponent, HoistingComponent]
})
export class HomeComponent {
    constructor(private _stepsService:StepsService) {
    }

    StepEnum = StepEnum;
    notStarted:boolean = true;
    steps:any;
    errorMessage:any;
    stepIndexToDisplay:number = null;
    currentStepNumber:number = 0;

    private displaySteps() {
        this.notStarted = false;
    }

    getSteps() {
        this._stepsService.list()
            .subscribe(
                steps => {
                    this.steps = steps;
                    this.displaySteps();
                },
                error => this.errorMessage = <any>error);
    }

    log() {
        console.log(this.steps);
    }

    displayStep(indexOfStep:number) {
        this.notStarted = true;
        this.stepIndexToDisplay = indexOfStep;
    }

    start() {

    }
}
