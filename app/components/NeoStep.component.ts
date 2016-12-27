import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { FakeStepsService } from '../services/step/FakeStepsService';
import { StepsService } from '../services/step/StepsService';
import { DomSanitizer } from "@angular/platform-browser";
// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
    selector: 'neo-step-component',
    template: `
    <h2>{{step.theme}}</h2>
    <hr>
    <div class="row">
      <div class="panel panel-default">
          <div class="panel-heading">
            <h4>{{step.question}}</h4>
          </div>
          <div class="panel-body">
            <iframe width="100%" height="300" [src]="step.urlOfFiddle" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

            <ul>
              <li *ngFor="let response of step.responses; let i=index">
                {{i}} - <samp>{{response.value}}</samp>
              </li>
            </ul>
          </div>
      </div>
    </div>
    `
})
export class NeoStepComponent implements OnInit {

    constructor(private route: ActivatedRoute, private _stepsServices: StepsService, private domSanitizer: DomSanitizer) {
    }

    stepNumber: number = null;
    step: any;

    ngOnInit() {
        this.stepNumber = this.route.snapshot.params['number'];
        this.step = this.route.snapshot.data['step'];
        this.step.urlOfFiddle = this.domSanitizer.bypassSecurityTrustResourceUrl(this.step.urlOfFiddle);
        //That it's ok, but now, we have an resolver and it's more efficient
        // this._stepsServices.list()
        //     .subscribe(
        //         steps => {
        //             this.steps = steps;
        //             this.theme = this.steps[0].theme;
        //             this.question = this.steps[0].question;
        //             this.responses = this.steps[0].responses;
        //             this.urlOfFiddle = this.domSanitizer.bypassSecurityTrustResourceUrl(this.steps[0].urlOfFiddle);
        //         },
        //         error => this.errorMessage = <any>error);
    }
}
