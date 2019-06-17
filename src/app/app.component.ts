import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  sidenavMode: string = 'over';
  LanguageSelectChangeValue: string = '';
  direction: string = '';
  circularMenuPosition: string = '';

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item-Nav Item-Nav  ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.sidenavMode =  'side';
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    this.LanguageSelectChangeValue = 'en_US';
    this.onLanguageChange(); 
  }

  sidenavModeChange(mode: string) {
    this.sidenavMode = mode;
  }

  onLanguageChange() {
    if (this.LanguageSelectChangeValue === 'fa_IR') {
      this.mirrorDirectionToRTL();
    }else {
      this.mirrorDirectionToLTR();
    }
  }

  mirrorDirectionToLTR() {
    this.direction = 'ltr';
    this.circularMenuPosition = 'Right';
    document.body.setAttribute('dir', this.direction);
  }

  mirrorDirectionToRTL() {
    console.log("RTL");
    this.direction = 'rtl';
    this.circularMenuPosition = 'Left';
    document.body.setAttribute('dir', this.direction);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
