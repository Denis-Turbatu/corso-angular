import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../user-input/investment.service';
import { investement } from '../invesment.module';

@Component({
  selector: 'app-investement-results',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investement-results.component.html',
  styleUrl: './investement-results.component.scss'
})
export class InvestementResultsComponent{
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.getCalculatedData();    
  }
}
