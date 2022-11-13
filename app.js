// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_Pf9i4PHz0T21WWBMiip5fVUvVtDgWs",
  authDomain: "hellonewworld-cb620.firebaseapp.com",
  projectId: "hellonewworld-cb620",
  storageBucket: "hellonewworld-cb620.appspot.com",
  messagingSenderId: "53602168246",
  appId: "1:53602168246:web:c9dbe4326bc211dab1e517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const member = document.getElementById("member")

async function getProfilemem(db){
    const proCol = collection(db,'profilemem')
    const proSnapshot = await getDocs(proCol)
    return proSnapshot
}

function showData(profilemember){
    const row = member.insertRow(-1)
    const nameCol = row.insertCell(0)
    const aniCol = row.insertCell(1)
    const songCol = row.insertCell(2)
    const movieCol = row.insertCell(3)
    const jobCol = row.insertCell(4)
    const quoteCol = row.insertCell(5)
    nameCol.innerHTML = profilemember.data().name
    aniCol.innerHTML = profilemember.data().animal
    songCol.innerHTML = profilemember.data().song
    movieCol.innerHTML = profilemember.data().movie
    jobCol.innerHTML = profilemember.data().job
    quoteCol.innerHTML = profilemember.data().quote
}



const data = await getProfilemem(db)
data.forEach(profilemember=>{
    showData(profilemember)
})

const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value").innerText = counter;

actions.forEach(action => {
    action.addEventListener('click', () => {
        const action_name = action.dataset.action;


        switch (action_name) {
            case 'increase':
                counter++;
                localStorage.setItem("counter", counter);
                break;

        }

        document.querySelector(".counter-value").innerText = counter;
    });
});



