import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { EditMemberComponent } from '../components/main/members/edit-member/edit-member.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<EditMemberComponent>{
  canDeactivate(component: EditMemberComponent) {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to continue? any unsaved changes will be lost');
    }
    return true;
  }
}
