import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StepsService } from '../services/step/StepsService';

@Injectable()
export class StepsResolver implements Resolve<any> {
    constructor(private stepsService: StepsService) { }


    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<any> | Promise<any> | any {
        // return this.stepsService.list();
        debugger;
        return this.stepsService.list()
            .map(steps => {
              if (steps) {
                  return steps[route.params['number']-1];
              } else {
                  return false;
              }
            });
    }
}
