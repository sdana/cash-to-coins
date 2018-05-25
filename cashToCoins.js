let coins = {}

const dollarsToCents = (dollarAmount) => {
   let amount = Math.ceil(dollarAmount * 100)
   const coinValues = [25, 10, 5, 1]
   const coinNames = ["quarters", "dimes", "nickels", "pennies"]
   console.log(coinValues.length)
   for (let i = 0; i < 4; i++){
       coins.coinNames[i] = Math.floor(amount / coinValues[i])
       newAmount += amount - (coins.parseInt(`${coinNames[i]}`)*coinValues[i])
        console.log(coinNames[i] + " " + coinValues[i])
   }
//    coins.quarters = Math.floor(amount / quarters)
//    newAmount = amount - (coins.quarters*25)
//    console.log(newAmount)
}
dollarsToCents(33.16)