import React from "react";

export interface userInterface {
    fullName: string;
    email: string;
    mobile: string;
    dob: string;
    organization: string;
    purpose: string;
    occuption: string;
    address: string;
}

interface FormInputProps {
    label: string;
    errors?: string;
    col?: number;
}

export default function FormInput({
    label,
    errors,
    col = 6,
    ...props
}: FormInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={`sl-form--col-${col}`}>
            <label className="sl-form--label" htmlFor={label}>{errors ? (<span className="sl-form--error">{errors} *</span>) : props.required ? label + " *" : label}</label>
            <input className="sl-form--input" {...props} />
        </div>
    );
}
