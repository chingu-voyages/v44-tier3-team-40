import { useState } from "react";
import firebase_app from "../config";
import { FirebaseApp } from "firebase/app";
import "firebase/database";

export default function FormContainer() {
    const [currentPage, setCurrentPage] = useState('chooseProvider');
    const [formData, setFormData] = useState({
        date: '',
        provider: '',
        service: '',
        patientName: '',
        patientEmail: '',
        PatientPhone: '',
        note: ''
    })

    const handleFormChange = (name: '', value: '') => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const saveFormDataToFirebase = () => {
        const appointmentRef = firebase.database.ref('appointments'); // ref(database, 'appointments')
        const newAppointmentRef = appointmentRef.push();
        newAppointmentRef.set(formData);
        console.log('Form data saved correctly!');
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => {
            if(prevPage === 'home') return 'chooseProvider';
            if(prevPage === 'chooseProvider') return 'service';
            if(prevPage === 'service') return 'date';
            if(prevPage === 'date') return 'contact';
            if(prevPage === 'contact') return 'confirm';
            if(prevPage === 'confirm') return 'success';
            return prevPage;
        })
    }

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => {
            if(prevPage === 'success') return 'confirm';
            if(prevPage === 'confirm') return 'contact';
            if(prevPage === 'contact') return 'date';
            if(prevPage === 'date') return 'service';
            if(prevPage === 'service') return 'chooseProvider';
            if(prevPage === 'chooseProvider') return 'home';
            return prevPage;
        })
    }

    return (
        <div>
          {currentPage === 'chooseProvider' && (
            <ChooseProviderPage
              handleFormChange={handleFormChange}
              formData={formData}
            />
          )}
          {currentPage === 'patientDetails' && (
            <PatientDetailsPage
              handleFormChange={handleFormChange}
              formData={formData}
            />
          )}
          {currentPage === 'chooseDate' && (
            <ChooseDatePage
              handleFormChange={handleFormChange}
              formData={formData}
            />
          )}
          {currentPage === 'confirm' && (
            <ConfirmPage
              formData={formData}
              saveFormDataToFirebase={saveFormDataToFirebase}
            />
          )}
    
          <button onClick={handlePreviousPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      );
}