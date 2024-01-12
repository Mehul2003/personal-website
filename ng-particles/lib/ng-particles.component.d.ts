import { AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import type { Container, Engine } from 'tsparticles-engine';
import { IParticlesProps } from './ng-particles.module';
import * as i0 from "@angular/core";
export declare class NgParticlesComponent implements AfterViewInit, OnDestroy {
    protected platformId: string;
    options?: IParticlesProps;
    url?: string;
    id: string;
    particlesInit?: (engine: Engine) => Promise<void>;
    particlesLoaded: EventEmitter<Container>;
    private destroy$;
    private container?;
    constructor(platformId: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgParticlesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgParticlesComponent, "ng-particles", never, { "options": "options"; "url": "url"; "id": "id"; "particlesInit": "particlesInit"; }, { "particlesLoaded": "particlesLoaded"; }, never, never, false>;
}
export declare class ParticlesComponent extends NgParticlesComponent {
    protected platformId: string;
    constructor(platformId: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<ParticlesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParticlesComponent, "Particles", never, {}, {}, never, never, false>;
}
