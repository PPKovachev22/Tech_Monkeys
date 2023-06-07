document.getElementById("btn").addEventListener("click", function() {
    var form = document.getElementById("form");
    form.classList.toggle("hidden");
});

document.getElementById("btn").addEventListener("click", function() {
    var form = document.getElementById("form");
    form.classList.toggle("form");
    
    var btn = document.getElementById("btn");
    btn.style.display = "none";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      var form = document.getElementById("form");
      form.classList.add("form");
      
      var btn = document.getElementById("btn");
      btn.style.display = "block";
    }
  });  