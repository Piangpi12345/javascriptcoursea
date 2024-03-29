function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiply(num1, num2);

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
    }

    function poperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('inputpone').value);
        let num2 = parseInt(document.getElementById('inputptwo').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let result = pluse(num1, num2);
    
                        // Display the result
                        displaypluse(result);
                    } else {
                        displaypluse('Please enter valid numbers');
                    }
                }
    
                function pluse(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a + b;
                }
    
                function displaypluse(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('resultp');
                    resultElement.textContent = `The result is: ${result}`;
}

function moperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('inputmone').value);
    let num2 = parseInt(document.getElementById('inputmtwo').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = minus(num1, num2);

                    // Display the result
                    displayminus(result);
                } else {
                    displayminus('Please enter valid numbers');
                }
            }

            function minus(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a - b;
            }

            function displayminus(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('resultm');
                resultElement.textContent = `The result is: ${result}`;
}

function doperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('inputdone').value);
    let num2 = parseInt(document.getElementById('inputdtwo').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = divide(num1, num2);

                    // Display the result
                    displaydivide(result);
                } else {
                    displaydivide('Please enter valid numbers');
                }
            }

            function divide(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a / b;
            }

            function displaydivide(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('resultd');
                resultElement.textContent = `The result is: ${result}`;
            }


            function roperation() {
                // Get user input from input fields
                let num1 = parseInt(document.getElementById('inputrone').value);
                let num2 = parseInt(document.getElementById('inputrtwo').value);
                // Check if inputs are valid numbers
                if (!isNaN(num1) && !isNaN(num2)) {
                // Perform the operation
                                let result = remainder(num1, num2);
            
                                // Display the result
                                displayremainder(result);
                            } else {
                                displayremainder('Please enter valid numbers');
                            }
                        }
            
                        function remainder(a, b) {
                            // Introduce a debugger statement to pause execution
                            debugger;
            
                            // Multiply the numbers
                            return a % b;
                        }
            
                        function displayremainder(result) {
                            // Display the result in the paragraph element
                            const resultElement = document.getElementById('resultr');
                            resultElement.textContent = `The result is: ${result}`;
                        }
        



