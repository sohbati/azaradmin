import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './auth/services/authentication.service';

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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private router: Router,
    private authenticationService: AuthenticationService) {


    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.sidenavMode =  'side';
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    this.LanguageSelectChangeValue = 'en_US';
    this.onLanguageChange('en_US'); 
  }

  sidenavModeChange(mode: string) {
    this.sidenavMode = mode;
  }

  onLanguageChange(lang: string) {
    this.LanguageSelectChangeValue = lang;
    console.log("clickd");
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
    this.direction = 'rtl';
    this.circularMenuPosition = 'Left';
    document.body.setAttribute('dir', this.direction);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onLoginClick() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
}
