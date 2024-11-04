// src/pages/FollowUpsPage.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../components/common/Header.jsx';

const EcgRecordsPage = () => {
    return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title='Follow-Ups' />
            <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
                <h2>Follow-Ups</h2>
                <p>This is the Follow-Ups page. Display follow-up information here.</p>
            </main>
        </div>
    );
};

export default EcgRecordsPage;