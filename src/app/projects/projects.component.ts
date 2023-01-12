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
  projectOrder = new Map([['face-detection', 0], ['lane-auto', 1], ['seefood', 2]]);
  projectIndex = 0;
  
  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.projectName = String(this.route.snapshot.paramMap.get('id'));
          this.projectIndex = <number>this.projectOrder.get(this.projectName);
      }
  });
  }

  ngOnInit(): void { 
    this.getProjects();
   }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
