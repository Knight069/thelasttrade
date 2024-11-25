import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";



export const Signup = () => {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  return (
    <>
      <Appbar />
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your infromation to create an account"} />
            <InputBox
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Full Name"
              label={"Name"}
            />
            <InputBox
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="kuchbhi@gmail.com"
              label={"Email"}
            />
            <InputBox
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="9876543210"
              label={"Phone Number"}
            />
            <InputBox
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Something complicated"
              label={"Password"}
            />

            <div className="pt-4">
              <Button
                onClick={async () => {
                  const response = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signup`,
                    {
                      name,
                      email,
                      phone,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                label={"Sign up"}
              />
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
