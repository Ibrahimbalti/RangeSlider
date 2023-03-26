import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const skillsData = [
  {
    value: "HTML",
  },
  {
    value: "CSS",
  },
  {
    value: "ReactJs",
  },
  {
    value: "Wordpress",
  },
];

const GenderData = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
  {
    value: "Other",
  },
];

const AppForm = () => {
  let [other, setOther] = useState("");
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "Male",
    phonenum: "",
    address: "",
    skill: ["CSS", "HTML"],
    profilepicture: null,
    city: "Islamabad",
  };

  let [formData, setFormData] = useState(initialValues);

  function handleChange(e) {
    let arr = formData.skill;
    if (e.target.checked) {
      arr.push(e.target.value);
      setFormData((prevState) => ({
        ...prevState,
        skill: arr,
      }));
    } else {
      arr.splice(arr.indexOf(e.target.value), 1);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (formData.city === "other") {
      navigate(
        "/forminfo",

        {
          state: {
            formData,
            other,
          },
        }
      );
    } else {
      navigate(
        "/forminfo",

        {
          state: {
            formData,
          },
        }
      );
    }
  }

  return (
    <div className="w-full flex-col flex items-center bg-gray-500 ">
      <div className="containter bg-white  my-10 rounded shadow-lg shadow-black  w-6/12">
        <h1 className="text-xl text-black text-center py-2  font-extrabold ">
          HTML FORM
        </h1>
        <form className="flex flex-col   py-2 px-5 " onSubmit={handleSubmit}>
          {/* ....................name.................... */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-black font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-2 py-2 outline-none rounded border-2"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* ....................Email.................... */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-black font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-2 py-2 outline-none border-2 rounded"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>
          {/* ....................Password.................... */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-black font-semibold text-lg"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-2 py-2 border-2 outline-none rounded"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* ....................Phone number.................... */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-black font-semibold text-lg">
              Phone number
            </label>
            <input
              type="phone number"
              id="phone"
              name="phone"
              defaultValue={`+92 ${formData.phonenum}`}
              className="px-2 py-2 border-2 outline-none rounded-right w-full"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phonenum: e.target.value,
                })
              }
            />
          </div>

          {/* ....................Gender.................... */}

          <div className="flex flex-col gap-1">
            <label className="text-black font-semibold text-lg">Gender</label>
            <div className="pl-2 flex flex-row gap-2">
              {GenderData.map((item) => (
                <div key={item.value}>
                  <input
                    type="radio"
                    id={item.value}
                    name="gender"
                    defaultChecked={formData.gender === item.value}
                    value={item.value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.target.value,
                      })
                    }
                  />
                  <label htmlFor={item.value}>{item.value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* ....................Skill.................... */}

          <div className="flex flex-col gap-1">
            <label className="text-black font-semibold text-lg">Skill</label>
            <div className="pl-2 flex flex-row gap-2">
              {skillsData.map((item) => (
                <div key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    name="skill"
                    value={item.value}
                    onChange={(e) => handleChange(e)}
                    defaultChecked={formData.skill.includes(item.value)}
                  />
                  <label htmlFor={item.value}>{item.value}</label>
                </div>
              ))}
            </div>
          </div>

          {/* ....................City.................... */}
          <label htmlFor="city" className="text-black font-semibold text-lg">
            Choose a City
          </label>
          {formData.city === "other" ? (
            <>
              <div className=" flex flex-col ">
                <select
                  id="city"
                  name="city"
                  className="px-2 py-2 border-2 outline-none rounded"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  value={formData.city}
                >
                  <optgroup label="first-choice">
                    <option
                      value="islamabad"
                      checked={formData.city === "islamabad"}
                    >
                      Islamabad
                    </option>
                    <option
                      value="karachi"
                      checked={formData.city === "karachi"}
                    >
                      Karachi
                    </option>
                    <option value="lahore" checked={formData.city === "lahore"}>
                      Lahore
                    </option>
                    <option value="other" checked={formData.city === "other"}>
                      Other
                    </option>
                  </optgroup>
                </select>
              </div>
              <input
                type="text"
                className="border-2 w-full"
                name="other"
                onChange={(e) => setOther(e.target.value)}
              />
            </>
          ) : (
            <div className=" flex flex-col gap-1">
              <select
                id="city"
                name="city"
                className="px-2 py-2 border-2 outline-none rounded"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
                value={formData.city}
              >
                <optgroup label="first-choice">
                  <option value="islamabad" checked={formData.city === "other"}>
                    Islamabad
                  </option>
                  <option value="karachi" checked={formData.city === "other"}>
                    Karachi
                  </option>
                  <option value="lahore" checked={formData.city === "other"}>
                    Lahore
                  </option>
                  <option value="other" checked={formData.city === "other"}>
                    Other
                  </option>
                </optgroup>
              </select>
            </div>
          )}

          {/* ....................Address.................... */}
          <div className="flex flex-col ">
            <label
              htmlFor="address"
              className="text-black font-semibold text-lg"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              cols="50"
              className="rounded outline-none border-2 px-3 py-2"
              value={formData.address}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: e.target.value,
                })
              }
            />
          </div>

          {/* ....................Profile Image.................... */}
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-black font-semibold text-lg">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              className="rounded outline-none px-3 py-2 bg-white-300"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  profilepicture: e.target.files[0].name,
                })
              }
              accept="image/png, image/jpeg"
            />
          </div>

          <input
            type="submit"
            value="Submite"
            className=" bg-blue-500 px-4 py-2 w-full mt-4 text-white font-bold text-xl rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AppForm;
