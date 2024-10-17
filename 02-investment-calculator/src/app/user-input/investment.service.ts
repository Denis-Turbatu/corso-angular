import { investement, resultInvestment } from "../invesment.module";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  result: resultInvestment[] = [];

  getCalculatedData() {
    return this.result;
  }

  calculateInvestment(InvData: investement): void {
    const principal = InvData.initInv;
    const rate = InvData.rtnRate / 100;
    const time = InvData.timeInv;
    const n = InvData.compound;
    const addContribution = InvData.addContribution;

    for (let i = 1; i <= time; i++) {
      // Calcola gli interessi composti e l'importo totale
      const ci = principal * Math.pow(1 + rate / n, n * i);
      const ta = ci + addContribution * i;

      // Calcola l'interesse per quest'anno
      const interest = ci - (principal + addContribution * (i - 1));

      // Crea un oggetto resultInvestment per l'anno corrente
      const yearlyResult: resultInvestment = {
        compoundInterest: ci,
        totalAmount: ta,
        interestPerYear: interest
      };

      // Aggiungi l'oggetto yearlyResult all'array result
      this.result.push(yearlyResult);
    }
  }
}