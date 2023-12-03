import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id = "tsparticles"

  options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#FFFFFF',
      },
      shape: {
        type: 'circle',
        stroke: {
        width: 0,
        color: '#000000',
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        random: true,
        straight: false,
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'push',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
      retina_detect: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async init(engine: Engine): Promise<void> {
    console.log(engine);
    await loadSlim(engine);
  }

}
