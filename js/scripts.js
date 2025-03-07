
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");





class Calculator {
  constructor(currentOperationText) {

    this.currentOperationText = currentOperationText;

    this.currentOperation = "";
  }


  // add digit to calculator screen
  addDigit(digit) {
    console.log(digit);
    // Check if number already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  // process all calculator operations
  processOperation(operation) {
    // Check if current value is empty
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      return;
    }

    // Get current and previous values
    let operationValue;
    let current = +this.currentOperationText.innerText;


    switch (operation) {

      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        console.log("op1: ")
        this.processClearCurrentOperator();
        break;
      case "ENTER":

        let id_sc_field_venda_id = document.querySelector("#produtoform1");
        let id_sc_field_venda_id1 = id_sc_field_venda_id.value;
        console.log("itens: " + id_sc_field_venda_id1);

        let id_sc_field_produto = document.querySelector("#produtoform1");
        let id_sc_field_produto1 = id_sc_field_produto.value;
        console.log("itens0: " + id_sc_field_produto1);

        
                var url_ = "../venda_itens/index.php?vg_venda_id=" + id_sc_field_venda_id1 + "&PRODUTO_G=" + id_sc_field_produto1;
        
                console.log("itens1: " + url_);
                window.open(url_, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=500,width=800,height=500");
                document.getElementById("id_sc_field_produto").value = "";
                location.reload();
        



        break;
      default:
        console.log("op3: ")
        return;
    }
  }

  // Change values of calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      // Append number to current value
      this.currentOperationText.innerText += this.currentOperation;

    } else {

      if (previous === 0) {
        operationValue = current;

      }
      this.currentOperationText.innerText = "";
    }
  }

  // Change math operation
  changeOperation(operation) {
    const mathOperations = ["*", "-", "+", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }

  }

  // Delete a digit
  processDelOperator() {
    var valor = this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);

    console.log("valor" + valor);

    document.getElementById("produtoform1").value = valor;

  }

  // Clear current operation
  processClearCurrentOperator() {
    console.log("op2: ")
    this.currentOperationText.innerText = "";
    document.getElementById("produtoform1").value = "";

  }


  // Clear all operations
  processClearOperator() {
    this.currentOperationText.innerText = "";

  }

}




buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;


    console.log("ra0: " + value);

    if (+value >= 0 || value === "." || value === "," || value === "*" || value === "$") {
      console.log("ra: " + value);

      document.getElementById("produtoform1").value += value;


      calc.addDigit(value);
    } else {
      console.log("ra1: " + value);
      calc.processOperation(value);
    }



  });
});

