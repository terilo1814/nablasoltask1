import React, { useEffect, useState } from 'react';
import './Project.css'
import CreateProject from '../CreateProject/CreateProject';
import ProjectType from '../ProjectType/ProjectType';
import View from '../View/View';
import ManageProject from '../ManageProjects/ManageProject';

const Project = () => {

    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData
            ? JSON.parse(savedData)
            : {
                projectName: '',
                client: '',
                startDate: '',
                endDate: '',
                notes: '',

                projectType: 'Time & Materials',
                hourlyRate: '',
                amount: '',
                budget: '',
                budgetResetMonthly: false,
                emailAlerts: false,
                budgetPercent: '80.00',

                view: 'list',

                manageProjects: 'everyone'
            };
    });

    const totalSteps=4
    const [currentStep, setCurrentStep] = useState(1)

    const handleNext = () => {
        if (currentStep === 1) {
            const { projectName, client, startDate, endDate } = formData;
            if (!projectName || !client || !startDate || !endDate) {
                alert('Please fill in all required fields.');
                return;
            }
        }

        if (currentStep === 2) {
            const { projectType, hourlyRate, amount, budget, } = formData;
            if (!projectType || !hourlyRate || !amount || !budget) {
                alert('Please fill in all required fields.');
                return;
            }
        }

        if (currentStep === 3) {
            const { view } = formData;
            if (!view) {
                alert('Please select one of them');
                return;
            }
        }

        if (currentStep === 4) {
            const { manageProjects } = formData;
            if (!manageProjects) {
                alert('Please select one of them');
                return;
            }
        }

        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFormDataChange = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
    };

    useEffect(() => {
        if (formData) {
            localStorage.setItem('formData', JSON.stringify(formData));
        }

    }, [formData])



    return (
        <div className="form-container">
            <div className='container'>
                {currentStep === 1 && (
                    <CreateProject
                        formData={formData}
                        onFormDataChange={handleFormDataChange}
                    />
                )}

                {currentStep === 2 && (
                    <ProjectType
                        formData={formData}
                        onFormDataChange={handleFormDataChange}
                    />
                )}

                {currentStep === 3 && (
                    <View
                        formData={formData}
                        onFormDataChange={handleFormDataChange}
                    />
                )}

                {currentStep === 4 && (
                    <ManageProject
                        formData={formData}
                        onFormDataChange={handleFormDataChange}
                    />
                )}


                <div className='buttons'>
                    <div className="back" onClick={handleBack}>&lt; Back</div>
                    <div className='btn-container'>
                        <button type="submit" className="btn"
                            onClick={handleNext}>Next</button>
                    </div>
                </div>

                <div className="pagination-dots">
                    {Array.from({ length: totalSteps }, (_, index) => (
                        <span
                            key={index}
                            className={`dot ${index + 1 === currentStep ? 'activePage' : ''}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Project;
