import { HomeComponent } from './home.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OKTA_CONFIG, OktaAuthModule, OktaAuthStateService } from '@okta/okta-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { OktaAuth } from '@okta/okta-auth-js';
import { MockModule } from 'ng-mocks';

describe('HomeComponent', () => {
  const config = {
    issuer: 'https://not-real.okta.com',
    clientId: 'fake-client-id',
    redirectUri: 'http://localhost:4200'
  };
  const oktaAuth = new OktaAuth(config);

  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
    imports: [
      RouterTestingModule,
      MockModule(OktaAuthModule)
    ],
    providers: [{ provide: OKTA_CONFIG, useValue: { oktaAuth }}],
    mocks: [OktaAuthStateService, OktaAuth]
  });
  

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
