import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export class FakeStepsService {
    list() {
      return Observable.of([
        {
          "id": 0,
          "name": "Hoisting",
          "theme": "Le hoisting",
          "question": "Qu'est qui va être loggé dans la console ?",
          "sampleOfCode": "var foo;\n (function(){\n\tconsole.log('1 : '+foo);\n\tfoo = 'first';\n\tconsole.log('2 : '+foo);\n\tvar foo;\n\tconsole.log('3 : '+foo);\n\tfoo = 'bis';\n\tconsole.log('4 : '+foo);\n\t})();\nconsole.log('5 : '+foo);",
          "responses": [
            {
              "name": "A",
              "value": "1 : undefined\n 2 : first\n 3 : first\n 4 : bis\n 5 : undefined",
              "correct": true
            },
            {
              "name": "B",
              "value": "1 : undefined\n 2 : first\n 3 : first\n 4 : bis\n 5 : undefined",
              "correct": true
            },
            {
              "name": "C",
              "value": "1 : undefined\n 2 : first\n 3 : first\n 4 : bis\n 5 : undefined",
              "correct": true
            }
          ]
        }
      ]);
    }
}
