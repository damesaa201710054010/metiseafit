function verifyCalc(response) {
    if (response.some(o => o.fulfillmentText === "#calc{stuff}")) {
        console.log("It Works!");
      } else {
        console.log("ok :/");
      }
    
}

module.exports = verifyCalc();