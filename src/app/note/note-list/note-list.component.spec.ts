import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoteListComponent } from './note-list.component';
import { NoteService } from '../note.service';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

describe('NoteListComponent', () => {
  let spectator: Spectator<NoteListComponent>
  const createComponent = createComponentFactory({
    component: NoteListComponent,
    imports: [MockModule(FormsModule), RouterTestingModule],
    providers: [
      mockProvider(NoteService, {
        noteList: []
      })
    ],
    mocks: [OktaAuthStateService, OktaAuth]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
