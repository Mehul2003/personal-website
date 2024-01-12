import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  projectName: string = "";
  projects: Project[] = [];
  projectOrder = new Map([['face-blur', 0], ['seefood', 1]]);
  projectIndex = 0;

  iframe = document.getElementById("ytFrame");
  videoId: string = 'Hn17rE_iOPg';
  
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
    // this.updateVideo(this.projects[this.projectIndex].mediaPath);
   }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  updateVideo(newVideoId: string) {
    this.videoId = newVideoId;
  }

}
