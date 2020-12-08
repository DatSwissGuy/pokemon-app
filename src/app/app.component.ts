import { ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'PokéNg';
  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();

    if (this.platformId === 'browser') {
      this.mobileQuery.addEventListener('change', () => this.mobileQueryListener);
    }
  }

  ngOnDestroy(): void {
    if (this.platformId === 'browser') {
      this.mobileQuery.removeEventListener('change', () => this.mobileQueryListener);
    }
  }
}
