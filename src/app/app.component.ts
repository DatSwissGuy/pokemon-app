import { ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fadeAnimation } from './animations/route-transition-fader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnDestroy {
  title = 'PokéNg';
  mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    if (this.platformId === 'browser') {
      this.mobileQuery.addEventListener('change', () => this.mobileQueryListener);
    }
  }

  public getRouterOutletState(outlet): boolean {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnDestroy(): void {
    if (this.platformId === 'browser') {
      this.mobileQuery.removeEventListener('change', () => this.mobileQueryListener);
    }
  }
}
