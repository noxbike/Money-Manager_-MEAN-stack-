$service = "hello man"

$name = [
      [
      "vidot piece auto-moto",
      "Mr.Bricolage",
      "Briconaute",
      "Jardicane",
      "Scale-Brico",
      "Leroy-Merlin",
      "Ravate",
      "Ferme et Jardin",
      "Weldom"
      ],
      [
      "Total St-Benoit",
      "Total St-Denis"
      ],
      [
        "Mickael",
        "Payet"
      ],
      [
        "Urssaf-cotisation",
        "Impot.gouv",
        "Assurance-dec"
      ],
      [
        "Run-Traiteur",
        "Boulangerie",
        "Bar St-Suzanne",
      ]

generateSpending(){
	for(let i = 0; i < 100; i++){
        $random = Get-Random -Maximum $name.length
        $item : Expense = {
        	name: $name[random][Get-Random -Maximum $name.length * name[random].length],
        	category: 'Expense',
        	amount: Math.floor(Math.random() *(100 - 10) + 10),
        	tag: this.tag[random],
        	charge: true,
        	date: new Date(this.today.getFullYear(), this.today.getMonth(),Math.floor(Math.random() * 30), Math.floor(Math.random() * 24)),
        	justificatif: this.justificatif,
      }
}