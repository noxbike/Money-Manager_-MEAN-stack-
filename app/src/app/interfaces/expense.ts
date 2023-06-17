export interface Expense {
    name: string
    category: "Expense" | "Income"
    amount: number
    tag: "Matériel" | "Gazole" | "Employée" | "Prélèvement/Frais" | "Repas"| "Réparations/Maintenance" | "Impot" | "Urssaf"
    charge: true | false 
    date: Date 
    justificatif: string 
}
