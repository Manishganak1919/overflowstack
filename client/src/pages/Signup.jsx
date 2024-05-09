import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { register } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errmessage, setErrormessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrormessage("please fill the all fields");
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrormessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left */}
        <div className="md:block hidden flex-1">
          <img
            src={register}
            alt="sign-up logo"
            className="w-100 h-100 object-cover rounded-md"
          />
        </div>
        {/**right */}
        <div className="flex-1">
          <div className="">
            <div className="my-6 text-center">
              <span className="text-3xl font-bold text-[#07beb8]">
                create account
              </span>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="your username" />
                <TextInput
                  type="text"
                  placeholder="your username"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="your email" />
                <TextInput
                  type="email"
                  placeholder="your email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="your password" />
                <TextInput
                  type="password"
                  placeholder="your password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                gradientDuoTone="greenToBlue"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" color="info" />
                    <span className="pl-3">loading....</span>
                  </>
                ) : (
                  "sign up"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-[#07beb8]">
                Sign in
              </Link>
            </div>
            {errmessage && (
              <Alert className="my-5" color="failure">
                {errmessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
