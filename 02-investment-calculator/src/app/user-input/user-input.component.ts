import { Component, inject } from '@angular/core';
import { InvestmentService } from './investment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { type investement } from '../invesment.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  
  investmentData: investement = {
    initInv: 0,
    rtnRate: 0,
    timeInv: 0,
    compound: 0,
    addContribution: 0,
  };

  private investmentService = inject(InvestmentService); 

  // Metodo per calcolare l'investimento
  calcola() {
    const result = this.investmentService.calculateInvestment(this.investmentData);
  }
}
