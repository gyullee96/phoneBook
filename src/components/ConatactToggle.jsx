import React, { useState } from 'react'
import ContactList from './ContactList';

function ToggleSection() {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div style={{ padding: '10px', fontFamily: 'Arial' }}>
            <h3
                onClick={toggle}
                style={{
                    cursor: 'pointer',
                    background: '#f0f0f0',
                    padding: '10px',
                    borderRadius: '6px',
                }}
            >
                {isOpen ? '▼ 연락처 목록 ' : '▶ 연락처 목록'}
            </h3>

            {isOpen && (
                <div style={{ padding: '10px', background: '#fff4e6' }}>
                    <ContactList />
                </div>
            )}
        </div>
    );
}

export default ToggleSection;