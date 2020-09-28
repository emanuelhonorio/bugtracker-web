import { BugUpdateModelComponent } from './components/bug-update-model/bug-update-model.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBugComponent } from './pages/create-bug/create-bug.component';
import { ListBugsComponent } from './pages/list-bugs/list-bugs.component';
import { BugsHeaderComponent } from './components/bugs-header/bugs-header.component';
import { BugsTableComponent } from './components/bugs-table/bugs-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateBugComponent,
    ListBugsComponent,
    BugsHeaderComponent,
    BugsTableComponent,
    BugUpdateModelComponent,
  ],
  entryComponents: [BugUpdateModelComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class BugModule {}
