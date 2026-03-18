document.addEventListener("DOMContentLoaded", function () {

    // ================= FORM SUBMIT =================
    let form = document.querySelector(".form2");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, password });

            localStorage.setItem("users", JSON.stringify(users));

            alert("Form submitted!");

            // redirect to next page
            window.location.href = "form.html";
        });
    }

    // ================= ADMIN DISPLAY =================
    let container = document.getElementById("adminData");

    if (container) {
        let data = JSON.parse(localStorage.getItem("users")) || [];

        if (data.length === 0) {
            container.innerHTML = "No data found!";
        } else {
            data.forEach((user, index) => {
                let div = document.createElement("div");

                div.innerHTML = `
                    <p><b>${index + 1}</b></p>
                    <p>Name: ${user.name}</p>
                    <p>Password: ${user.password}</p>
                    <hr>
                `;

                container.appendChild(div);
            });
        }
    }

    // ================= CLEAR ALL DATA =================
    let clearBtn = document.getElementById("clearBtn");

    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            let confirmDelete = confirm("Are you sure you want to delete all data?");

            if (confirmDelete) {
                localStorage.removeItem("users");
                alert("All data cleared!");

                location.reload();
            }
        });
    }

});