import { useState,useRef, useEffect } from "react";
import "./RecruitmentForm.css";

const RecruitmentForm = () => {

const domainRef=useRef();
const hostelRef=useRef();
const branchRef=useRef();

useEffect(()=>
{
setUserInfo({branch:branchRef.current.value,
hostel:hostelRef.current.value,
domain:domainRef.current.value});

},[])

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    phone: "",
    branch: "",
    hostel: "",
    domain: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    const { firstName, lastName, Email, phone, branch, hostel, domain } =
      userInfo;
    event.preventDefault();

    const res = fetch(
      "https://kts-project-ed80c-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          Email,
          phone,
          branch,
          hostel,
          domain,
        }),
      }
    );
    if (res) {
      alert("Thanks for filling form , Have a nice day");
    } else {
      alert("please fill data correctly");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
     

        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-white">
          Welcome Amigos!!!
          </h2>
         
          <div className="mt-10 flex flex-col gap-x-6 mx-auto max-w-screen-xl  ">
            <div className="mx-auto">
              <label
                htmlFor="first-name"
                className="block text-sm w-24px font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  className="bord max-w-md"
                  value={userInfo.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  className="bord  max-w-md"
                  value={userInfo.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email{" "}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="email"
                  className="bord  max-w-md"
                  value={userInfo.Email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-white"
              >
                Mobile No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="mobile-no"
                  autoComplete="mobile-no"
                  className="bord  max-w-md"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Branch
              </label>
              <div className="mt-2">
                <select
                  id="branch"
                  name="branch"
                  autoComplete="branch"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={userInfo.branch}
                  onChange={handleChange}
                  ref={branchRef}
                >
                  <option value="CSE">CSE</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="CSIT">CSIT</option>
                  <option value="CSE(AIML)">CSE(AIML)</option>
                  <option value="CSE(AI)">CSE(AI)</option>
                  <option value="EC">EC</option>
                  <option value="EN">EN</option>
                  <option value="MECHANICAL">MECHANICAL</option>
                  <option value="CIVIL">CIVIL</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="hostel"
                className="block text-sm font-medium leading-6 text-white"
              >
                Hostel
              </label>
              <div className="mt-2">
                <select
                  id="hostel"
                  name="hostel"
                  autoComplete="hostel"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={userInfo.hostel}
                  onChange={handleChange}
                  ref={hostelRef}
                >
                  <option>DayScholor</option>
                  <option>PG</option>
                  <option>Hostel</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="domain"
                className="block text-sm font-medium leading-6 text-white"
              >
                Select Domain
              </label>
              <div className="mt-2">
                <select
                  id="domain"
                  name="domain"
                  autoComplete="domain"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={userInfo.domain}
                  onChange={handleChange}
                  ref={domainRef}
                >
                  <option>Web Development</option>
                  <option>Android Development</option>
                  <option>Machine Learning</option>
                  <option>CP</option>
                </select>
              </div>
            </div>
          </div>
          
       
          <button type="submit" className="btn hover:cursor">
            Save
          </button>
       
        </div>

      </div>
    </form>
  );
};

export default RecruitmentForm;
