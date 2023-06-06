export interface Offer {
  id: string
  amount: number
  interestRate: number
  term: number
  loanType: string
  provider: string
  details?: string
}
