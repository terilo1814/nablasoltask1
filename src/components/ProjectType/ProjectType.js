import React, { useState } from 'react'
import './ProjectType.css'

const ProjectType = ({ formData, onFormDataChange }) => {

    const [isAmountFocus, setIsAmountFocus] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            // Toggle the checkbox value
            onFormDataChange({ [name]: checked });
        } else {
            if (name === 'amount') {
                if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
                    onFormDataChange({ [name]: value });
                }
            } else {
                onFormDataChange({ [name]: value });
            }
        }
    };

    const handleAmountBlur = () => {
        const formattedValue = parseFloat(formData.amount || 0).toFixed(2);
        onFormDataChange({ amount: formattedValue });
        setIsAmountFocus(false)
    };


    const handleAmountFocus = () => {
        setIsAmountFocus(true)
    }

    return (
        <div className='content-height'>
        
            <h3 className='project-type-title'>Project type</h3>
            <h5 className='project-type-subtitle'>Don't panic-You can also customize this types in settings</h5>

            <div className="project-type-options">
                {['Time & Materials', 'Fixed Fee', 'Non-Billable'].map((item) => (
                    <button
                        type="button"
                        name='projectType'
                        key={item}
                        value={item}
                        className={`project-type-option ${formData.projectType === item ? 'active' : ''}`}
                        onClick={handleChange}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="section">
                <h5 className='header-left'>Hourly</h5>
                <p className='hourly-subtitle'>We need hourly rates to track your project's billable amount.</p>

                <div className='hourly-rate-container'>
                    <select
                        className="input-dropdown"
                        value={formData.hourlyRate}
                        name='hourlyRate'
                        onChange={handleChange}
                    >
                        <option value="" className='hourly-rate-text'>Select Project Rate</option>
                        <option value="Project Hourly Rate" className='hourly-rate-text'>Project Hourly Rate</option>
                        <option value='Project Per Day Rate' className='hourly-rate-text'>Project Per Day Rate</option>
                    </select>

                    <div className={`${isAmountFocus ? 'focusAmount' : 'amount'}`}>
                        <span className="rupee-symbol">₹</span>
                        <input
                            type="text"
                            value={formData.amount}
                            onChange={handleChange}
                            onBlur={handleAmountBlur}
                            onFocus={handleAmountFocus}
                            name='amount'
                            placeholder="0.00"
                        />
                    </div>
                </div>

            </div>


            <div className="section">
                <h5 className='header-left'>Budget</h5>
                <p className='budget-subtitle'>We need hourly rates to track your project’s billable amount.</p>
                <select
                    className="input-dropdown"
                    value={formData.budget}
                    onChange={handleChange}
                    name='budget'
                >
                    <option value="">Select Budget</option>
                    <option value="Hours per Person">Hours per Person</option>

                </select>

                <div className="checkbox-group">
                    <label className="custom-checkbox">
                        <input
                            type="checkbox"
                            name='budgetResetMonthly'
                            checked={formData.budgetResetMonthly}
                            onChange={handleChange}
                        />
                        Budget resets every month
                    </label>
                    <label className="custom-checkbox">
                        <div className="checkbox-with-percentage">
                            <input
                                type="checkbox"
                                name='emailAlerts'
                                checked={formData.emailAlerts}
                                onChange={handleChange}
                            />
                            Send email alerts if project exceeds
                            <input type='number'
                            className='percent-value' 
                            name='budgetPercent'
                            value={formData.budgetPercent}
                            onChange={handleChange} /> % of budget
                        </div>
                    </label>
                </div>

            </div>

        </div>
    )
}

export default ProjectType