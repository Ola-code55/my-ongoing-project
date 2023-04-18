        function learnHow() {
        let Firstname = prompt("What is your first name?");
        let Lastname = prompt("What is your last name?");
        let email = prompt("What is your email address?");

        if (Firstname && Lastname && email) {
          alert(
            "Hello! " +
              Firstname +
              " " +
              Lastname +
              ", We will contact you via email 😃"
          );
        } else {
          alert("Please fill in all the fields.");
        }
      }
      let learnButton = document.querySelector(".learn-button");
      learnButton.addEventListener("click", learnHow);
    