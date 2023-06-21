import { Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExpensesDataService } from '../services/expensesData/expenses-data.service';

export interface itemExpense {
  name: string;
  category: "Expense"|"Income",
  amount: number,
  tag: string,
  charge: Boolean,
  date: Date,
  justificatif: string,
}


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class TableauComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Name', 'Amount'];
  dataSource = new MatTableDataSource(this._expensesService.getExpenses());

  constructor(private _expensesService: ExpensesDataService){

  }

  ngOnInit(): void {
    this._expensesService.generateData();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
