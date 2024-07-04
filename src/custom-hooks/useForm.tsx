import {useState} from 'react';
import {isValidEmail} from '../utils/helper';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';

interface ErrorObject {
  [key: string]: any;
}

const useForm = (formFields: any) => {
  const [fields, setFields] = useState(formFields);
  const [errors, setErrors] = useState<ErrorObject>({});

  const updateFields = (fieldName: string) => (value: string) => {
    setFields({...fields, ...{[fieldName]: value}});
  };

  const handleBlur =
    (type: string, fieldName: string) =>
    (_e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      // check required by default
      if (!fields[fieldName]) {
        setErrors({...errors, [fieldName]: 'Required'});
        return;
      }
      let newErrors = {...errors};
      delete newErrors[fieldName];
      setErrors({...newErrors});

      switch (type) {
        case 'email':
          if (!isValidEmail(fields[fieldName])) {
            setErrors({...errors, [fieldName]: 'Invalid email'});
          }
          break;
        case 'password':
          if (fields[fieldName]?.length < 6) {
            setErrors({
              ...errors,
              [fieldName]: 'Password should have atleast 6 characters',
            });
          }
          break;

        case 'confirmPassword':
          if (fields[fieldName] !== fields.password) {
            setErrors({...errors, [fieldName]: 'Password not matching'});
          }
          break;

        default:
          let newErrors = {...errors};
          delete newErrors[fieldName];
          setErrors({...newErrors});
      }
    };
  return [fields, errors, updateFields, handleBlur];
};

export default useForm;
