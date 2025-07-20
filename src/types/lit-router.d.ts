declare module '@lit-labs/router' {
  import { TemplateResult } from 'lit';
  import { ReactiveControllerHost } from 'lit';

  export interface Route {
    path: string;
    render: () => TemplateResult;
  }

  export class Router {
    constructor(host: ReactiveControllerHost & HTMLElement, routes: Route[]);
    outlet(): TemplateResult;
    goto(path: string): void;
  }
} 