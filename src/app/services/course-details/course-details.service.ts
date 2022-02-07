import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor(private sharedService: SharedService ) { }

  getCourseById(id: string) {
    return this.sharedService.getCourseById(id);
  }
}
