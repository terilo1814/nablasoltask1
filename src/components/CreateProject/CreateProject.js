import React from 'react'

const CreateProject = ({ formData, onFormDataChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onFormDataChange({ [name]: value });
    };


    return (
        <div className='content-height'>
            <h3 className='project-title'>Create a project</h3>

            <div className="section">
                <label>Project Name</label>
                <input
                    type="text"
                    name="projectName"
                    className='project-name'
                    value={formData.projectName}
                    placeholder="Enter project name here"
                    onChange={handleChange}
                />
            </div>

            <div className="section">
                <label>Client</label>
                <div className='client'>
                    <select value={formData.client}
                        className='client-option'
                        name='client'
                        onChange={handleChange}>
                        <option value="">Select a client</option>
                        <option value="Client A">Client A</option>
                        <option value="Client B">Client B</option>
                    </select>
                    <span >Or</span>
                    <button type="button" className="new-client">+ New Client</button>
                </div>
            </div>

            <div className="section">
                <label>Dates</label>
                <div className='dates'>
                    <input
                        type="date"
                        className='start-date'
                        name='startDate'
                        value={formData.startDate}
                        onChange={handleChange}

                    />
                    <span className='dash'>-</span>
                    <input
                        className='end-date'
                        type="date"
                        name='endDate'
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="section">
                <label>Notes</label>
                <div >
                    <textarea
                        className='notes'
                        name='notes'
                        value={formData.notes}
                        placeholder="Optional"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateProject