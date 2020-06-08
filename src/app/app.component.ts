import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-budget-tracker';

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }

}
