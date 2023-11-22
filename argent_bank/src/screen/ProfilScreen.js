import React from "react";
import CompHeader from "../component/CompHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { postProfil } from "../redux/slices/profil/thunk";
import CompFooter from "../component/CompFooter";

const ProfilScreen = () => {
  const dispatch = useDispatch();

  const { profil } = useSelector((state) => ({
    profil: state.Profil.profil,
  }));

  const formik = useFormik({
    initialValues: {
      firstName: profil?.firstName || "",
      lastName: profil?.lastName || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required field"),
      lastName: Yup.string().required("Required field"),
    }),
    onSubmit: (values) => {
      if (values) {
        dispatch(postProfil(values));
      }
      return;
    },
  });

  return (
    <body>
      <CompHeader />
      <main className="main bg-dark">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "50%",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Profile</h2>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="input-wrapper" style={{ marginBottom: "10px" }}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>

            <div className="input-wrapper" style={{ marginBottom: "10px" }}>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red", marginTop: "5px" }}>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>

            <div>
              <button className="sign-in-button" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
      <CompFooter/>
    </body>
  );
};

export default ProfilScreen;
