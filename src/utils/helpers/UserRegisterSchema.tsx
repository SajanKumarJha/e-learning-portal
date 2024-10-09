import * as yup from "yup";
import { userInterface } from "../../components/child/FormInput";

export const userIntialValue: userInterface = {
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    organization: '',
    occuption: '',
    purpose: '',
};

export const userFormSchema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    mobile: yup.string().matches(/^[0-9]+$/, "Mobile number must be digits").required("Mobile is required"),
    dob: yup.date().optional(),
    organization: yup.string().optional(),
    occupation: yup.string().optional(),
    purpose: yup.string().required("Purpose is required"),
}).test('match', 'Mobile and email must match', function (value) {
    const { mobile, email } = value;
    if (mobile && email) {
        return mobile === email;
    }
    return true;
});
