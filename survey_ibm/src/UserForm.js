import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

// Our inner form component. Will be wrapped with Formik({..})
const InnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
                id="nombre"
                placeholder="mi nombre"
                type="text"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className= {errors.nombre && touched.nombre ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.email &&
            touched.email && <div className="input-feedback">{errors.nombre}</div>}
        </div>
        <div className='form-group'>
            <input
                id="email"
                placeholder="mi correo"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.email &&
            touched.email && <div className="input-feedback">{errors.email}</div>}
        </div>
        
        <div className='form-group'>
            <input
                id="tel"
                placeholder="mi teléfono"
                type="tel"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.tel && touched.tel ? 'form-control text-input error' : 'form-control text-input'}
            />
            {errors.tel &&
            touched.tel && <div className="input-feedback">{errors.tel}</div>}
        </div>
        <button type="button" disabled={isSubmitting} className='btn btn-dark btn-lg btn-block my-5'>
            enviar
        </button>
        </form>
  );
};

const UserForm = withFormik({
  mapPropsToValues: () => ({ email: '', nombre: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    nombre: Yup.string()
      .required(),
    tel: Yup.number(),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm', // helps with React DevTools
})(InnerForm);

export default UserForm;