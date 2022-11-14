
// **********************************SIGNUP*****************************
// ******  signup etudiant *******

function signupEtudiant() {
    var test = true;
    var firstName = document.getElementById('firstName').value;

    if (firstName.length < 3) {
        document.getElementById('firstNameError').innerHTML = "first name must have at least 3 character";
        document.getElementById('firstNameError').style.color = "red";
        test = false;
    } else {
        document.getElementById('firstNameError').innerHTML = ""
    }


    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameError').innerHTML = "last name must have at least 5 character";
        document.getElementById('lastNameError').style.color = "red";
        test = false;
    } else {
        document.getElementById('lastNameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email)
    if (verifEmail) {
        document.getElementById('emailError').innerHTML = ""

    } else {
        document.getElementById('emailError').innerHTML = "invalid email"
        document.getElementById('emailError').style.color = "red"
        test = false;

    }
    if (emailExist(email)) {
        document.getElementById("emailExistError").innerHTML = "Email already exists";
        document.getElementById("emailExistError").style.color = "red";
        test = false;
    } else {
        document.getElementById("emailExistError").innerHTML = "";

    }
    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (verifPassword) {
        document.getElementById("passwordError").innerHTML = "";
    } else {
        document.getElementById("passwordError").innerHTML = "invalid Password";
        document.getElementById("passwordError").style.color = "red";
        test = false;
    }
    var phone = document.getElementById('phone').value;
    if (!isNaN(phone) && phone.length == 8) {
        document.getElementById('phoneError').innerHTML = "";
    } else {
        document.getElementById('phoneError').innerHTML = " invalid phone";
        document.getElementById('phoneError').style.color = "red";
        test = false;
    }

    var adress = document.getElementById('adress').value;
    if (adress.length < 3) {
        document.getElementById('adressError').innerHTML = "invalid adress";
        document.getElementById('adressError').style.color = "red";
        test = false;
    } else {
        document.getElementById('adressError').innerHTML = "";

    }
    var cin = document.getElementById('cin').value;
    if (!isNaN(cin) && phone.length == 8) {
        document.getElementById('cinError').innerHTML = "";
    } else {
        document.getElementById('cinError').innerHTML = " invalid cin";
        document.getElementById('cinError').style.color = "red";
        test = false;
    }
    var city = document.getElementById('city').value;
    if (city.length < 3) {
        document.getElementById('cityError').innerHTML = "invalid City";
        document.getElementById('cityError').style.color = "red";
        test = false;
    } else {
        document.getElementById('cityError').innerHTML = "";
    }

    if (test) {
        var idUserEtudiant = JSON.parse(localStorage.getItem("idUserEtudiant") || "100");
        var user = {
            id: idUserEtudiant,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            adress: adress,
            phone: phone,
            cin: cin,
            city: city,
            role: "etudiant"
        }
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("idUserEtudiant", idUserEtudiant + 1);
        location.replace("login.html")

    }
}

// ********** signup professor**********
function signupProfessor() {
    var test = true;
    var firstName = document.getElementById('firstName').value;

    if (firstName.length < 3) {
        document.getElementById('firstNameProError').innerHTML = "first name must have at least 3 character";
        document.getElementById('firstNameProError').style.color = "red";
        test = false;
    } else {
        document.getElementById('firstNameProError').innerHTML = ""
    }


    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameProError').innerHTML = "last name must have at least 5 character";
        document.getElementById('lastNameProError').style.color = "red";
        test = false;
    } else {
        document.getElementById('lastNameProError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email)
    if (verifEmail) {
        document.getElementById('emailProError').innerHTML = ""

    } else {
        document.getElementById('emailProError').innerHTML = "invalid email"
        document.getElementById('emailProError').style.color = "red"

    }
    if (emailExist(email)) {
        document.getElementById("emailExistError").innerHTML = "Email already exists";
        document.getElementById("emailExistError").style.color = "red";
        test = false;
    } else {
        document.getElementById("emailExistError").innerHTML = "";

    }
    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (verifPassword) {
        document.getElementById("passwordProError").innerHTML = "";
    } else {
        document.getElementById("passwordProError").innerHTML = "invalid Password";
        document.getElementById("passwordProError").style.color = "red";
        test = false;
    }
    var phone = document.getElementById('phone').value;
    if (!isNaN(phone) && phone.length == 8) {
        document.getElementById('phoneProError').innerHTML = "";
    } else {
        document.getElementById('phoneProError').innerHTML = " invalid phone";
        document.getElementById('phoneProError').style.color = "red";
        test = false;
    }

    var adress = document.getElementById('adress').value;
    if (adress.length < 3) {
        document.getElementById('adressProError').innerHTML = "invalid adress";
        document.getElementById('adressProError').style.color = "red";
        test = false;
    } else {
        document.getElementById('adressProError').innerHTML = "";

    }
    var speciality = document.getElementById('speciality').value;
    if (speciality.length < 3) {
        document.getElementById('specialityError').innerHTML = "invalid Speciality";
        document.getElementById('specialityError').style.color = "red";
        test = false;
    } else {
        document.getElementById('specialityError').innerHTML = "";

    }
    var experience = document.getElementById('experience').value;
    if (experience.length < 1) {
        document.getElementById('experienceError').innerHTML = "invalid Experience";
        document.getElementById('experienceError').style.color = "red";
        test = false;
    } else {
        document.getElementById('experienceError').innerHTML = "";

    }
    if (test) {
        var idUserPro = JSON.parse(localStorage.getItem("idUserPro") || "10");
        var user = {
            id: idUserPro,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            adress: adress,
            phone: phone,
            speciality: speciality,
            experience: experience,
            role: "professor"
        }
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("idUserPro", idUserPro + 1);
        location.replace("login.html")

    }
}

// ************** Signup Admin ***************
function signupAdmin() {
    var test = true;
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        document.getElementById('firstNameAdmError').innerHTML = "first name must have at least 3 character";
        document.getElementById('firstNameAdmError').style.color = "red";
        test = false;
    } else {
        document.getElementById('firstNameAdmError').innerHTML = "";

    }
    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        document.getElementById('lastNameAdmError').innerHTML = "last name must have at least 5 character";
        document.getElementById('lastNameAdmError').style.color = "red";
        test = false;
    } else {
        document.getElementById('lastNameAdmError').innerHTML = "";

    }
    var email = document.getElementById('email').value;
    var verifEmail = validateEmail(email);
    if (verifEmail) {
        document.getElementById('emailAdmError').innerHTML = "";
    } else {
        document.getElementById('emailAdmError').innerHTML = "email invalid";
        document.getElementById('emailAdmError').style.color = "red";
        test = false;

    }
    if (emailExist(email)) {
        document.getElementById("emailExistError").innerHTML = "Email already exists";
        document.getElementById("emailExistError").style.color = "red";
        test = false;
    } else {
        document.getElementById("emailExistError").innerHTML = "";

    }
    var password = document.getElementById('password').value;
    var verifPassword = checkPassword(password);
    if (verifPassword) {
        document.getElementById('passwordAdmError').innerHTML = "";
    } else {
        document.getElementById('passwordAdmError').innerHTML = "password invalid";
        document.getElementById('passwordAdmError').style.color = "red";
        test = false;
    }
    if (test) {
        var idUserAdmin = JSON.parse(localStorage.getItem(idUserAdmin) || "1");
        var user = {
            id: idUserAdmin,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: "admin"
        }
        var users = JSON.parse(localStorage.getItem(users) || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("idUserAdmin", idUserAdmin + 1);
        location.replace("login.html")

    }
}

//*********** function pour verification de mail *************
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// ********** function pour verification de password ***********
function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return re.test(str);
}

// ************** function de controle email exist or not exist***********
function emailExist(email) {
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var exist = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            exist = true;
        }
    }
    return exist;
}


// ******************** login****************
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var findedUser;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            findedUser = users[i];
            break;
        }

    }
    if (findedUser) {
        document.getElementById("loginError").innerHTML = ""

        localStorage.setItem('connectedUser', JSON.stringify(findedUser.id))

        switch (findedUser.role) {
            case "admin":
                location.replace('dashboardAdmin.html')

                break;
            case "etudiant":
                location.replace('index.html')

                break;
            case "professor":
                location.replace('dashboard.html')

                break;

            default:
                break;
        }

    } else {
        document.getElementById("loginError").innerHTML = "wrong informations"
        document.getElementById("loginError").style.color = "red"
    }
}
// ************************************ dashboard professor**************************

// ************** function d'ajouter les formations*********

function addFormation() {
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    var test = true;
    var name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').innerHTML = "name formation invalide";
        document.getElementById('nameError').style.color = "red";
        test = false;

    } else {
        document.getElementById('nameError').innerHTML = "";

    }
    var price = document.getElementById('price').value;
    if (price <= 0) {
        document.getElementById('priceError').innerHTML = "Price must be greater than 0";
        document.getElementById('priceError').style.color = "red";
        test = false;

    } else {
        document.getElementById('priceError').innerHTML = "";
    }
    var numberHours = document.getElementById('numberHours').value;
    if (numberHours <= 0) {
        document.getElementById('numberHoursError').innerHTML = "Number hours must be greater than 0";
        document.getElementById('numberHoursError').style.color = "red";
        test = false;

    } else {
        document.getElementById('numberHoursError').innerHTML = "";
    }
    var numberPlace = document.getElementById('numberPlace').value;
    if (numberPlace < 5) {
        document.getElementById('numberPlaceError').innerHTML = "number place must be greater than 5 ";
        document.getElementById('numberPlaceError').style.color = "red ";
        test = false;

    } else {
        document.getElementById('numberPlaceError').innerHTML = ""

    }
    var description = document.getElementById('description').value;
    if (description < 5) {
        document.getElementById('descriptionError').innerHTML = "Must be description your formation  ";
        document.getElementById('descriptionError').style.color = "red";
        test = false;

    } else {
        document.getElementById('descriptionError').innerHTML = "";

    }
    var dateDebut = document.getElementById('dateDebut').value;
    console.log(dateDebut);
    if (dateDebut) {
        document.getElementById('dateDebutError').innerHTML = "";

    } else {
        document.getElementById('dateDebutError').innerHTML = "date invalide";
        document.getElementById('dateDebutError').style.color = "red";
        test = false;

    }
    var image = document.getElementById('image').value;
    var newImagePath = replaceCh(image)
    // console.log(newImagePath);
    if (test) {
        var idFormation = JSON.parse(localStorage.getItem("idFormation") || "1");
        var formation = {
            id: idFormation,
            idProfessor: Number(connectedUser),
            name: name,
            price: price,
            numberHours: numberHours,
            numberPlace: numberPlace,
            description: description,
            dateDebut: dateDebut,
            image: newImagePath
        }
        var formations = JSON.parse(localStorage.getItem("formations") || "[]");
        formations.push(formation);
        localStorage.setItem("formations", JSON.stringify(formations));
        localStorage.setItem("idFormation", idFormation + 1);
        location.reload();

    }
}
// ********** function  images******

function replaceCh(ch) {


    var newCh = ch.replace(/\\/g, "/");
    var res = newCh.replace("fakepath", "Users/TOPINFORMATIQUE/Desktop/projet/images");
    return res;

}
// ************* function liste formation*******
function displayForamtion() {
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    var formations = JSON.parse(localStorage.getItem("formations") || "[]");
    var formationsTable = `
    <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name Formation</th>
                    <th scope="col">Price</th>
                    <th scope="col">Hours</th>
                    <th scope="col">Place</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date Debut</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>`;
    for (let i = 0; i < formations.length; i++) {

        if (formations[i].idProfessor == connectedUser) {
            formationsTable = formationsTable + `
                    <tr>
                    <td>${formations[i].name}</td>
                    <td>${formations[i].price}DT</td>
                    <td>${formations[i].numberHours}H</td>
                    <td>${formations[i].numberPlace}</td>
                    <td>${formations[i].description}</td>
                    <td>${formations[i].dateDebut}</td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick='editFormation(${formations[i].id})'>Edit</button>
                        <button type="button" class="btn btn-info" onclick="addTest(${formations[i].id})">Add Test</button>
                        <button type="button" class="btn btn-danger" onclick='deleteFormation(${formations[i].id})'>Delete</button>

                    </td>
                  </tr>
                    `;

        }
    }

    formationsTable = formationsTable + `
                 </tbody>
              </table>
                 `;



    document.getElementById('formationsTable').innerHTML = formationsTable;
}
// *********** function liste students **********

function displayStudentReserver() {
    var connectedUser = localStorage.getItem("connectedUser");
    var orders = JSON.parse(localStorage.getItem("orders") || "[]");
    var myAvis = getMyAvis();
    console.log(myAvis);
    var studentsTable = `
    <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Name formation</th>
                    <th scope="col">Avis Students</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>`;
    
    for (let i = 0; i < orders.length; i++) {
        var user = searchById(orders[i].idUser, "users");
        var formation = searchById(orders[i].idFormation, "formations");
        // var avis = searchById(myAvis[i].idProfessor, "formations");
        //    console.log("heeeeeere", avis);

        if (formation.idProfessor == connectedUser) {
            studentsTable = studentsTable + `
                    <tr>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${formation.name}</td>
                    <td>${myAvis[i].avis}</td>`;

            studentsTable = studentsTable + `
                    
                    
                    
                    <td>
                    <button type="button" class="btn btn-info" onclick="repStudentTest(${formation.id})" >Reponse Student</button>

                    <button type="button" class="btn btn-info" onclick="addNote(${formation.id}, ${user.id})" >Note Test</button>

                    </td>
                  </tr>
                    `;

        }
    }
    for (let i = 0; i < myAvis.length; i++) {
        console.log(myAvis[i].idProfessor, connectedUser, myAvis[i].idFormation, orders[i].idFormation);
        if (myAvis[i].idProfessor == connectedUser && myAvis[i].idFormation == orders[i].idFormation) {


            
            break;
        }
        else {


            studentsTable = studentsTable + `
                            <td>avis</td>
    
                            `;
            break;
        }

    }

    studentsTable = studentsTable + `
                 </tbody>
              </table>
                 `;



    document.getElementById('studentsTable').innerHTML = studentsTable;
}

// **************** function delete formations *************
function deleteFormation(id) {
    var formations = JSON.parse(localStorage.getItem("formations") || "[]");
    for (let i = 0; i < formations.length; i++) {
        if (formations[i].id == id) {
            pos = i;
        }
    }
    formations.splice(pos, 1);
    localStorage.setItem("formations", JSON.stringify(formations));
    location.reload();
}

//   ************** function de rechreche par id****************
function searchById(id, key) {
    var tab = JSON.parse(localStorage.getItem(key) || "[]");
    var object;
    console.log("tab", tab);

    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == id) {
            object = tab[i];
        }
    }
    return object;
}
//   ************** function de modification la formation**********
function editFormation(id) {
    var formation = searchById(id, "formations");
    // console.log("hzeeeeere", formation);
    var editFormFormation = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Edit Formation</h3>

       
        <input type="text" id="numberNewHours" value=${formation.numberHours}>
        <span id="newHoursError"></span>

        <input type="text" id="numberNewPlace" value=${formation.numberPlace}>
        <span id="newNumberPlaceError"></span>
        

        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="validateFormationEdit(${formation.id})">Validate</button>

            

        </div>
    </div>
</section>
    `;
    document.getElementById("editFormFormation").innerHTML = editFormFormation;
}
//  ************ function validate modification formation***********
function validateFormationEdit(id) {

    var test = true;
    var newHours = document.getElementById('numberNewHours').value;
    // console.log("newHours", newHours);

    if (newHours < 0) {
        document.getElementById('newHoursError').innerHTML = " Number hours must be greater than 0";
        document.getElementById('newHoursError').style.color = "red";
        test = false;
    } else {
        document.getElementById('newHoursError').innerHTML = "";

    }
    var newNumberPlace = document.getElementById('numberNewPlace').value;
    console.log("newNumberPlace", newNumberPlace);
    if (newNumberPlace < 5) {
        document.getElementById('newNumberPlaceError').innerHTML = " Number place must be greater than 5";
        document.getElementById('newNumberPlaceError').style.color = "red";
        test = false;
    } else {
        document.getElementById('newNumberPlaceError').innerHTML = "";

    }



    if (test) {

        var formations = JSON.parse(localStorage.getItem("formations") || "[]")

        for (let i = 0; i < formations.length; i++) {
            if (formations[i].id == id) {

                formations[i].numberHours = newHours;
                formations[i].numberPlace = newNumberPlace;
                break;

            }

        }
        localStorage.setItem("formations", JSON.stringify(formations))
        location.reload()



    }



}
// *************** function to save test**************
function saveTest(idFormation, idProfessor) {
    let value = document.getElementById('value50').value
    console.log(value);

    var idTest = JSON.parse(localStorage.getItem("idTest") || "1");

    var test = {
        id: idTest,
        idFormation: idFormation,
        idProfessor: idProfessor,
        test: value
    }
    var tests = JSON.parse(localStorage.getItem("test") || "[]");

    tests.push(test);

    localStorage.setItem("test", JSON.stringify(tests));
    localStorage.setItem("idTest", idTest + 1);
    location.reload();

}
// **************** function d'ajouter test****************
function addTest(id) {
    var formation = searchById(id, "formations");

    var ajoutTest = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Ajouter Test</h3>

       
        <textarea name="value50" id="value50" cols="30" rows="10"></textarea>

        

        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="saveTest(${id}, ${formation.idProfessor})">Add Test</button>

            <span id="loginError"></span>

        </div>
    </div>
</section>
    `;

    document.getElementById("value40").innerHTML = ajoutTest;


}
// **************** function d'ajouter Note**************
function addNote(id, studentId) {
    var formation = searchById(id, "formations");
    console.log(formation.idProfessor);
    var ajoutNote = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Ajouter Note</h3>

       
        <input type="text" name="note" placeholder="Ajouter note" id="ajouteNote">

        

        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="saveNote(${id}, ${formation.idProfessor}, ${studentId})">Add Note</button>

        

        </div>
    </div>
</section>
    `;

    document.getElementById("ajoutNote").innerHTML = ajoutNote;


}
// *********** function save note****************
function saveNote(idFormation, idProfessor, studentId) {
    let ajouteNote = document.getElementById('ajouteNote').value

    var idNote = JSON.parse(localStorage.getItem("idNote") || "1");

    var allNote = {
        id: idNote,
        idFormation: idFormation,
        idProfessor: idProfessor,
        idStudent: studentId,
        note: ajouteNote
    };
    var notes = JSON.parse(localStorage.getItem("allNote") || "[]");

    notes.push(allNote);
    localStorage.setItem("allNote", JSON.stringify(notes));
    localStorage.setItem("idNote", idNote + 1);
    location.reload();

}
// *******************function reponse etudiant de test******************

function repStudentTest(id) {
    var reponse = JSON.parse(localStorage.getItem("allReponseTest") || "[]")
    for (let i = 0; i < reponse.length; i++) {
        var formation = searchById(id, "formations");

        if (formation.id == reponse[i].idFormation) {

            var testReponse = `
            <section id="registt">
        
            <div class="form" style="margin: auto ;">
                <h3>Reponse Student Test</h3>
        
               
                <textarea name="qst" id="qst" cols="30" rows="10">${reponse[i].repTest}</textarea>
        
                </div>
            </div>
        </section>
            `;
        } else {
            var testReponse = `
            <section id="registt">
        
            <div class="form" style="margin: auto ;">
                <h3>Reponse student Test</h3>
                <h4>!Reponse est vide! </h4>
        
                </div>
            </div>
        </section>
            `;
        }
    }

    document.getElementById("testReponse").innerHTML = testReponse;


}
// *************** function get my avis**********
function getMyAvis() {
    var connectedUser = localStorage.getItem("connectedUser");
    var allAvis = JSON.parse(localStorage.getItem("allAvis") || "[]");
    var myAvis = [];
    for (let i = 0; i < allAvis.length; i++) {
        if (connectedUser == allAvis[i].idProfessor) {
            myAvis.push(allAvis[i]);
        }
    }
    console.log(myAvis);
    return myAvis;
}




// ******************************************Students***********************************

// *************function that allows to display all courses objects into courses page*******************
function displayCourses() {
    var formations = JSON.parse(localStorage.getItem("formations") || "[]");
    var courseBloc = "";
    for (let i = 0; i < formations.length; i++) {
        courseBloc = courseBloc + `
      <div  class="courses">
                <img src="${formations[i].image}" alt="">
                <div class="details">
                    <span>Updated ${formations[i].dateDebut}</span>
                    <h6>${formations[i].name}</h6>
                    <div class="star">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span>(239)</span>
                    </div>

                </div>
                <div class="cost">

                    ${formations[i].price} DT
                </div>
                <button class="btn btn-warning" onclick="addToCourse(${formations[i].id})"> 
                    Order 
                  </button>
            </div>
      `;

    }
    document.getElementById("courseBloc").innerHTML = courseBloc;
}
// ************** function add To course************
function addToCourse(idFormation) {

    var connectedUser = localStorage.getItem("connectedUser");
    if (connectedUser) {
        localStorage.setItem("formationToReserve", idFormation);
        location.replace("courseInner.html");
    } else {
        location.replace("login.html");
    }
}
//   ***************** function de course inner  **********
function courseInfos() {
    var formationToReserve = localStorage.getItem("formationToReserve");
    var formation = searchById(formationToReserve, "formations");
    var courseBloc = `
    <div class="enroll" >
            <h3>This course includes:</h3>
            <p><i class="bi bi-info-circle"></i>

            ${formation.name}</p>

            <p><i class="bi bi-clock-history"></i>

                ${formation.numberHours} Hours </p>
            <p id="place"><i class="bi bi-shield-check"></i>
            <span id="placeError"></span>



                ${formation.numberPlace} Number place</p>
            <p><i class="bi bi-coin"></i>


                ${formation.price}DT</p>
            
            <p><i class="bi bi-award"></i>
                Certificate of completion</p>
            <div class="enrollBtn">
                <button class="blue"  onclick="validatePlace(${formation.id})" >Enroll Course</button>
                <button class="blue"  onclick="goMyTraining()" >My training</button>
            </div>    


        </div>
    `;



    document.getElementById("courseInfos").innerHTML = courseBloc;
}
function goMyTraining() {
    location.replace('mytraining.html');

}
// ************ function validation de place de formation***********
function validatePlace(id) {

    var connectedUser = localStorage.getItem("connectedUser")
    var checkReservation = reservedOrNote(connectedUser, id)
    if (checkReservation) {
        // msg d'errreur
        alert("cette foramtion reservee")
    } else {
        var idOrders = JSON.parse(localStorage.getItem('idOrders') || '1');

        var order = {

            id: idOrders,
            idUser: Number(connectedUser),
            idFormation: Number(id)

        };
        // console.log("here list", list);
        console.log(order);
        var orders = JSON.parse(localStorage.getItem("orders") || '[]')
        console.log(orders);
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders))
        localStorage.setItem('idOrders', idOrders + 1)

        var formations = JSON.parse(localStorage.getItem('formations') || '[]')
        let formationToReserve = localStorage.getItem('formationToReserve')
        for (let i = 0; i < formations.length; i++) {
            if (formations[i].id == formationToReserve) {
                formations[i].numberPlace = Number(formations[i].numberPlace) - 1;
                break;
            }

        }

        localStorage.setItem("formations", JSON.stringify(formations))
        location.reload()
    }




}



// *********** function reservee or not reservee**************
function reservedOrNote(idUser, idFormation) {
    var orders = JSON.parse(localStorage.getItem("orders") || "[]")
    var result = false;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser == idUser && orders[i].idFormation == idFormation) {

            result = true
        }
    }
    return result
}

// ************ function get my Training ***********
function getMyOrders() {
    var connectedUser = localStorage.getItem("connectedUser");
    var orders = JSON.parse(localStorage.getItem("orders") || "[]");
    var myOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (connectedUser == orders[i].idUser) {
            myOrders.push(orders[i]);
        }
    }
    return myOrders;
}
function displayOrders() {
    var myOrders = getMyOrders();
    var connectedUser = localStorage.getItem('connectedUser');
    var allNote = JSON.parse(localStorage.getItem('allNote') || "[]");
    var userOrders = "";

    for (let i = 0; i < myOrders.length; i++) {
        var formation = searchById(myOrders[i].idFormation, "formations");
        var professor = searchById(formation.idProfessor, "users");


        userOrders =
            userOrders +
            `
        <tr>
        <th scope="row">${formation.name}</th>
        <td>${formation.dateDebut}</td>
        <td>${formation.price}DT</td>
        <td>${professor.firstName} ${professor.lastName}</td>`;
        for (let i = 0; i < allNote.length; i++) {
            // var formation = searchById(myOrders[i].idFormation, "formations");
            if (allNote[i].idStudent == connectedUser && allNote[i].idFormation == formation.id) {
                userOrders = userOrders + `
                <td>${allNote[i].note} </td>
                `
                break;
            } 

        }
        userOrders = userOrders + `
        
        <td><button type="button" class="btn btn-info" onclick="essaiTest(${formation.id})"> Test </button></td>
        <td><button type="button" class="btn btn-secondary" onclick="avis(${formation.id})">Avis</button></td>
        


        

      </tr>
        `;
    }
    document.getElementById("userOrders").innerHTML = userOrders;
}

// *********** function Essai Test *************************
function essaiTest(id) {
    var tests = JSON.parse(localStorage.getItem("test") || "[]")
    for (let i = 0; i < tests.length; i++) {
        var formation = searchById(id, "formations");
        // var exam=searchById(formation.id, "test");  
        if (formation.id == tests[i].idFormation) {
            console.log("yeeeeeeeeeees", formation.id);
            console.log("teeeeeeeeeeeeest", tests[i].idFormation)
            var test = `
            <section id="registt">
        
            <div class="form" style="margin: auto ;">
                <h3>Test</h3>
        
               
                <textarea name="qst" id="qst" cols="30" rows="10">${tests[i].test}</textarea>
        
                
        
                <div class="btn" style="margin:auto ;">
                <button type="button" class="btn btn-primary" onclick="addReponseTest(${formation.id})">Reponse</button>
        
                    
        
                </div>
            </div>
        </section>
            `;
        } else {
            var test = `
            <section id="registt">
        
            <div class="form" style="margin: auto ;">
                <h3>Test</h3>
                <h4>Essai révisé de date de puits bientôt.</h4>
        
                </div>
            </div>
        </section>
            `;
        }
    }

    document.getElementById("test").innerHTML = test;


}
// *********** function add reponse test students********
function addReponseTest(id) {
    var formation = searchById(id, "formations");

    var ajoutReponseTest = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Reponse Test</h3>

       
        <textarea name="reponseTest" id="reponseTest" cols="30" rows="10"></textarea>

        

        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="saveReponseTest(${id})">Envoyer</button>

            

        </div>
    </div>
</section>
    `;

    document.getElementById("ajoutReponseTest").innerHTML = ajoutReponseTest;


}
// ************ function to save reponse test students*******
function saveReponseTest(idFormation) {
    var connectedUser = localStorage.getItem("connectedUser");
    let reponseTest = document.getElementById('reponseTest').value;

    var idRepTest = JSON.parse(localStorage.getItem("idRepTest") || "1");

    var allReponseTest = {
        id: idRepTest,
        idFormation: idFormation,
        idStudent: Number(connectedUser),
        repTest: reponseTest
    }
    var reponse = JSON.parse(localStorage.getItem("allReponseTest") || "[]");

    reponse.push(allReponseTest);

    localStorage.setItem("allReponseTest", JSON.stringify(reponse));
    localStorage.setItem("idRepTest", idRepTest + 1);
    location.reload();

}

// *********** function avis students to prof************
function avis(id) {
    var formation = searchById(id, "formations");

    var ajoutAvis = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Ajouter Avis</h3>
        <input type="text" name="yourAvis" id="yourAvis">


        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="saveAvis(${id}, ${formation.idProfessor})">Envoyer</button>

            <span id="loginError"></span>

        </div>
    </div>
</section>
    `;

    document.getElementById("ajoutAvis").innerHTML = ajoutAvis;


}

// ***************** function save avis students ***************
function saveAvis(idFormation, idProfessor) {
    let yourAvis = document.getElementById('yourAvis').value;
    var connectedUser = localStorage.getItem('connectedUser');
    var idAvis = JSON.parse(localStorage.getItem("idAvis") || "1");

    var allAvis = {
        id: idAvis,
        idFormation: idFormation,
        idProfessor: idProfessor,
        idStudent: Number(connectedUser),
        avis: yourAvis
    };
    var avis = JSON.parse(localStorage.getItem("allAvis") || "[]");

    avis.push(allAvis);
    localStorage.setItem("allAvis", JSON.stringify(avis));
    localStorage.setItem("idAvis", idAvis + 1);
    location.reload();

}


// ************************************ dashboard admin***************************************

// **********function liste des formations *********
function allTraining() {
    var formation = JSON.parse(localStorage.getItem("formations") || "[]");
    trainingTable = `
    <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name formation</th>
                    <th scope="col">Description formation</th>
                    <th scope="col">price formation</th>
                    <th scope="col">date debut</th>
                    <th scope="col">Actions</th>
                
                  </tr>
                </thead>`;
    for (let i = 0; i < formation.length; i++) {
        // var professor = searchById(formation[i].idProfessor, "users");
        // // console.log("here professor",professor);
        trainingTable = trainingTable + `
                    <tbody>
                    <tr>
                      
                      <td>${formation[i].name}</td>
                      <td>${formation[i].description}</td>
                      <td>${formation[i].price}DT</td>
                      <td>${formation[i].dateDebut}</td>
                      <td><button type="button" class="btn btn-danger" onclick='deleteFormation(${formation[i].id})'>Delete</button>
                      </td>
                    </tr>
                    
                    
                 
                    
               
               
    ` };
    trainingTable = trainingTable + `
    </tbody>
    </table>
    `;
    document.getElementById('trainingTable').innerHTML = trainingTable;
}

// ******************** function liste all users students **********************
function allStudents() {
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    usersTable = `
    <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name Student</th>
                    <th scope="col">Phone</th>
                    
                    <th scope="col">Actions</th>
                
                  </tr>
                </thead>`;
    for (let i = 0; i < users.length; i++) {
        if (users[i].role == "etudiant") {
            usersTable = usersTable + `
            <tbody>
            <tr>
              
              <td>${users[i].firstName} ${users[i].lastName}</td>
              <td>${users[i].phone}</td>

              <td><button type="button" class="btn btn-warning" onclick="editStudents(${users[i].id})">Edit</button>
              <td><button type="button" class="btn btn-danger" onclick="deleteStudents(${users[i].id})">Delete</button>
              </td>
            </tr>  
            `}
    };
    usersTable = usersTable + `
    </tbody>
    </table>
    `;
    document.getElementById('usersTable').innerHTML = usersTable;

}

// ********** function delete students********
function deleteStudents(id) {
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            pos = i;
        }
    }
    users.splice(pos, 1);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}
// ********************** function modification phone  students*******************
function editStudents(id) {
    var users = searchById(id, "users");
    console.log(users.phone);
    var editFormStudents = `
    <section id="registt">

    <div class="form" style="margin: auto ;">
        <h3>Edit Student</h3>

       
        <input type="text" id="numberNewPhone" value=${users.phone}>
        <span id="newPhoneError"></span>

        
        

        <div class="btn" style="margin:auto ;">
        <button type="button" class="btn btn-primary" onclick="validatePhoneEdit(${users.id})">Validate</button>

            

        </div>
    </div>
</section>
    `;
    document.getElementById("editFormStudents").innerHTML = editFormStudents;
}
// ********** function validate new number phone students
function validatePhoneEdit(id) {

    var test = true;
    var numberNewPhone = document.getElementById('numberNewPhone').value;

    if (numberNewPhone.length == 8) {
        document.getElementById('newPhoneError').innerHTML = "";

    } else {
        document.getElementById('newPhoneError').innerHTML = " invalide number phone";
        document.getElementById('newPhoneError').style.color = "red";
        test = false;

    }

    if (test) {

        var users = JSON.parse(localStorage.getItem("users") || "[]")

        for (let i = 0; i < users.length; i++) {
            // console.log("phone",users[i].phone);

            if (users[i].id == id) {

                users[i].phone = numberNewPhone;
                // console.log("phone",users[i].phone);

                break;

            }

        }
        localStorage.setItem("users", JSON.stringify(users));
        location.reload();
    }



}

// ******************************************* header ******************************************

// *******************function header***********************
function generateHeader() {
    var headerContent = "";
    var connectedUser = localStorage.getItem("connectedUser");
    if (connectedUser) {
        var user = searchById(connectedUser, "users");
        if (user.role == "etudiant") {
            headerContent = `
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="#">welcome ${user.firstName}</a></li>
        <li><a href="course.html">Courses</a></li>
        <li><a href="mytraining.html">My Training</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>
        
        
        <li><a href="contact.html">Contact</a></li>
    </ul>
        `;
        } else if (user.role == "professor") {
            headerContent = `
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="#">welcome ${user.firstName}</a></li>
        <li><a href="dashboard.html">dashboard professor</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>

        
        <li><a href="contact.html">Contact</a></li>
    </ul>
        `;
        } else if (user.role == "admin") {
            headerContent = `
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="#">welcome ${user.firstName}</a></li>
        <li><a href="dashboardAdmin.html">dashboard Admin</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>

        
        <li><a href="contact.html">Contact</a></li>
    </ul>
        `;

        }
    } else {
        headerContent = `
  <ul>
  <li><a href="index.html">Home</a></li>
  <li><a href="about.html">About</a></li>
  <li><a href="blog.html">Blog</a></li>
  <li><a href="course.html">Courses</a></li>
  <li><a href="login.html">Login</a></li>
  <li><a href="#">Signup</a>
  <ul>
      <li><a href="signup.html">Student</a></li>
      <li><a href="signupProfessor.html">Professor</a></li>
  </ul>
  </li>
  <li><a href="contact.html">Contact</a></li>
</ul>
`;
    }

    document.getElementById("headerId").innerHTML = headerContent;
}
//   *********** function logout********
function logout() {
    localStorage.removeItem("connectedUser");
    location.replace("index.html");
}