import React from 'react'
import './ManageProject.css'

const ManageProject = ({ formData, onFormDataChange }) => {

    const handleManageProject = (manageProject) => {
        onFormDataChange({ manageProjects: manageProject })
    }

    return (
        <div className='content-height'>
            <h3 className='manage-heading'>Who can manage projects</h3>
            <p className='subtitle'>Don't panic - You can customize this permission in settings </p>
            <div className='manage-sections'>

                <div className={`manage-section ${formData.manageProjects === 'everyone' ? 'active-manage-projects' : ''}`} onClick={() => handleManageProject('everyone')}>
                    <div className='image-container'>
                        <img src='./Everyone.JPG' alt='everyone' />
                    </div>
                    <div className='text'>
                        <p>Everyone</p>
                        <p>All users can now to see it, but guests cannot access the projects</p>
                    </div>
                </div>

                <div className={`manage-section ${formData.manageProjects === 'admin' ? 'active-manage-projects' : ''}`} onClick={() => handleManageProject('admin')}>
                    <div className='image-container'>
                        <img src='./Admin.JPG' alt='admin' />
                    </div>
                    <div className='text'>
                        <p>Only Admin's</p>
                        <p>Only admins can manage everything</p>
                    </div>
                </div>
                <div className={`manage-section ${formData.manageProjects === 'specific' ? 'active-manage-projects' : ''}`} onClick={() => handleManageProject('specific')}>
                    <div className='image-container'>
                        <img src='./Specific.JPG' alt='specific' />
                    </div>
                    <div className='text'>
                        <p>Only to Specific people</p>
                        <p>Only some specific people can able to see it</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProject