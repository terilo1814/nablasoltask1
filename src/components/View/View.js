import React from 'react'
import './View.css'

const View = ({ formData, onFormDataChange }) => {

    const handleViewChange = (viewType) => {
        onFormDataChange({ view: viewType });
    };

    return (
        <div className='content-height'>
            <h3>Select a view</h3>
            <p className='view-text'>You can also customize the views in settings</p>

            <div className='view-options'>
                <div
                    className="view-option"
                    onClick={() => handleViewChange('list')}
                >
                    <img src="List.JPG" alt="List View" className={`view-image ${formData.view === 'list' ? 'active' : ''}`} />
                    <span className="view-text">List</span>
                </div>
                <div
                    className="view-option"
                    onClick={() => handleViewChange('board')}
                >
                    <img src="Board.jpg" alt="Board View" className={`view-image ${formData.view === 'board' ? 'active' : ''}`} />
                    <span className="view-text">Board</span>
                </div>
            </div>
        </div>
    )
}

export default View