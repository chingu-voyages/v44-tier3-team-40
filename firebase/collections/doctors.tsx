import { database } from "../config";
import { ref, push, onValue, remove } from "firebase/database";

const doctorsInDB = ref(database, 'doctors');


// push(doctorsInDB, "dr. coleman");
// console.log(doctorsInDB);