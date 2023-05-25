import { database } from "../config";
import { ref, push, onValue, remove } from "firebase/database";

export const doctorsInDB = ref(database, 'Doctors');

// onValue(doctorsInDB, function(snapshot) {
//     if (snapshot.exists()) {
//         const test = Object.entries(snapshot.val());
//         console.log(test);
//     } else {
//         console.log("in the else of onValue");
//     }
// })

// push(doctorsInDB, "dr. coleman");
// console.log(doctorsInDB);