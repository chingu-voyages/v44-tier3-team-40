"use client";
import { useParams } from "next/navigation";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "@/firebase/config";
import { doc } from "firebase/firestore";

const AppointmentDetailsPage = () => {
  const params = useParams();
  const docRef = doc(db, "appointments", params.id);

  const [snapshot, loading, error] = useDocument(docRef);

  // date: "",
  //   provider: {name: '', credentials: ''},
  //   service: "",
  //   patientName: "",
  //   patientEmail: "",
  //   patientPhone: "",
  //   note: "",

  return (
    <div>
      {snapshot && (
        <ul>
          <h1>Appointment Details</h1>
          <li>
            {new Date(snapshot.data().date.toDate()).toLocaleDateString()}
          </li>
          <li>
            {snapshot.data().provider.name +
              snapshot.data().provider.credentials}
          </li>
          <li>{snapshot.data().service}</li>
          <h1>Patient Details</h1>
          <li>{snapshot.data().patientName}</li>
          <li>{snapshot.data().patientEmail}</li>
          <li>{snapshot.data().patientPhone}</li>
          <li>{snapshot.data().note}</li>
        </ul>
      )}
    </div>
  );
};

export default AppointmentDetailsPage;
