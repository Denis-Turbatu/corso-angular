export interface investement {
    initInv: number;
    rtnRate: number;
    timeInv: number;
    compound: number;
    addContribution: number;
}

export interface resultInvestment {
    compoundInterest: number,
    totalAmount: number,
    interestPerYear: number
}[];