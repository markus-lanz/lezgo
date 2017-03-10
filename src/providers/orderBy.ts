/*
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */

import {Pipe, PipeTransform,Injectable} from '@angular/core';
import * as _ from 'lodash';
@Pipe({name: 'orderBy'})
@Injectable()
export class OrderBy implements PipeTransform {
  transform(value: any): any{

    if(value!== undefined && value!== null){
      return _.uniqBy(value, 'famName');
    }

    return value;
  }

}
