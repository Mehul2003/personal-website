import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectName: string = "";
  projects: Project[] = [];
  projectOrder = new Map([['face-blur', 0], ['seefood', 1]]);
  projectIndex = 0;

  
  constructor(private projectService: ProjectService) { 
  }

  ngOnInit(): void { 
    this.getProjects();
   }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
