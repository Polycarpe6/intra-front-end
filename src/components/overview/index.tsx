import React from 'react';

type AlertProps = {
    message: string;
};

export const SuccessAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        backgroundColor: '#d4edda',
        color: '#155724',
        border: '1px solid #c3e6cb',
        padding: '12px 16px',
        borderRadius: '4px',
        marginBottom: '12px'
    }}>
        <strong>Sucesso:</strong> {message}
    </div>
);

export const ErrorAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb',
        padding: '12px 16px',
        borderRadius: '4px',
        marginBottom: '12px'
    }}>
        <strong>Erro:</strong> {message}
    </div>
);

export const WarningAlert: React.FC<AlertProps> = ({ message }) => (
    <div style={{
        backgroundColor: '#fff3cd',
        color: '#856404',
        border: '1px solid #ffeeba',
        padding: '1.8rem',
        borderRadius: '1.5rem',
        marginBottom: '12px'
    }}>
        <strong>Atenção:</strong> {message}
    </div>
);