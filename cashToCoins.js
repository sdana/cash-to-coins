let coins = {}

const dollarsToCents = (dollarAmount) => {
   let amount = Math.ceil(dollarAmount * 100)
   const coinValues = [25, 10, 5, 1]
   const coinNames = ["quarters", "dimes", "nickels", "pennies"]
   let newAmount = 0
   for (let i = 0; i < 4; i++){
       coins[coinNames[i]] = Math.floor(amount / coinValues[i])
       newAmount += amount - (coins[coinNames[i]]*coinValues[i])
        console.log(coinNames[i] + " " + coinValues[i])
        console.log(coins)  
   }
}
dollarsToCents(45.25)