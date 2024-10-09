import React from 'react'
import FormInput from '../components/child/FormInput';
import { useFormik } from 'formik';
import { userFormSchema, userIntialValue } from '../utils/helpers/UserRegisterSchema';
import Header from '../components/base/Header';
import Footer from '../components/base/Footer';

const Register = () => {
    const { handleChange, errors, values } = useFormik({
        initialValues: userIntialValue,
        validationSchema: userFormSchema,
        onSubmit(values) {
            console.log(values);
        },
    })
    return (
        <>
            <div className='sl-register--main'>
                <Header link />
                <div className="flex w-full">
                    <div className="sl-register--left">
                        {/* {JSON.stringify(values)} */}
                    </div>
                    <div className="sl-register--right">
                        <form className='sl-form--list'>
                            <div className="sl-form--title">Request for Invitation</div>
                            <div className="sl-form--row">
                                <FormInput name="fullName" errors={errors.fullName} type='text' label='Full Name' required onChange={handleChange} />
                                <FormInput name="dob" errors={errors.dob} type='text' label='DOB' onChange={handleChange} />
                            </div>
                            <div className="sl-form--row">
                                <FormInput name="email" errors={errors.email} type='email' label='Email' required onChange={handleChange} />
                                <FormInput name="mobile" errors={errors.mobile} type='text' label='Mobile' required onChange={handleChange} />
                            </div>
                            <div className="sl-form--row">
                                <FormInput name="organization" errors={errors.organization} type='text' label='Organization' onChange={handleChange} />
                                <FormInput name="occuption" errors={errors.occuption} type='text' label='Occupation' onChange={handleChange} />
                            </div>
                            <div className="sl-form--row">
                                <FormInput col={12} name="purpose" errors={errors.purpose} type='text' label='Purpose' required onChange={handleChange} />
                            </div>
                            <div className="sl-form--row">
                                <div className="sl-form--col-12">
                                    <button type='submit' className='sl-form--submit'> Request Access </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer logo />
            </div>
        </>
    )
}

export default Register