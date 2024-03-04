
        const btn = document.getElementById('btn');
        const btn2 = document.getElementById('btn2');
        const guessInput = document.getElementById("Input");

        const randomNumber = Math.floor(Math.random() * 10) + 1;

        function checkGuess() {
            
            const userGuess = parseInt(guessInput.value);
            const messageElement = document.getElementById("message");

            if (userGuess === randomNumber) {
                messageElement.textContent = "Congratulations! You guessed the correct number!";
            } else if (userGuess < randomNumber) {
                messageElement.textContent = "Too low! Try again.";
            } else {
                messageElement.textContent = "Too high! Try again.";
            }
        }

        function clearInput() {
                // Clear the input field
                document.getElementById("Input").value = "";
            }
        btn.onclick = checkGuess;
        btn2.onclick = clearInput;
