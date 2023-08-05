'use strict';

console.log(document.querySelector(".message").textContent);






document.querySelector(".check").addEventListener(
    'click', function(event) {
        var guess = Number(document.querySelector(".guess").value);
      

        if (!guess) {
            document.querySelector(".message").textContent = "No Number! ";
        }


    }
);