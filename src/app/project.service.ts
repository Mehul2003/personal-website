import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, of } from 'rxjs';
import { PROJECTS } from './projects-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

}
