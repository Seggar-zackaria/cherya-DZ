import { useFormik, Field, ErrorMessage } from "formik";
import { useSchema } from "../../utils/schema";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const FormSignUp = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      famillyname: "",
      addresse: "",
      phonenuber: "",
      email: "",
      password: "",
    },
    validationSchema: useSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div>
      <form action="" autoComplete="off" method="post">
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={values.email}
          placeholder="email"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.email && touched.email
              ? "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-red-500/10 focus:border-red-500 ring-1 ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-red-500"
              : ""
          } block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm mt-7 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-sky-500/10 focus:border-blue-500 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6
        `}
          id="email"
        />
        {errors.email && touched.email && (
          <p className="text-red-600">{errors.email}</p>
        )}
      </form>
    </div>
  );
};

export default FormSignUp;
