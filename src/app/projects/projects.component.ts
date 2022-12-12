import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectName: string = "";
  description = [
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos " +
    "dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia " +
    "animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta " +
    "nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis " +
    "dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates " +
    "repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus " +
    "maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ""
  ];
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.projectName = String(this.route.snapshot.paramMap.get('id'));
      }
  });
  }

  ngOnInit(): void {  }

  

}
