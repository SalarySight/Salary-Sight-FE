import { useState } from "react";
import { useMutation } from '@apollo/client';
import "./Form.css";
import { GET_POST, CREATE_POST } from '../..'

const initialState = {
  username: "",
  gender: "",
  age: "",
  gradYear: "",
  program: "",
  degree: "",
  firstPosition: "",
  jobHuntDuration: "",
  yearsOfExperience: "",
  positionTitle: "",
  company: "",
  locationOfEmployment: "",
  typeOfEmployment: "",
  state: "",
  negotiation: "",
  salary: ""
}

const Form = ({ showForm, toggle }) => {
  const [form, setForm] = useState(initialState)
  const [formError, setFormError] = useState(false)
  const [createPost, { loading , error, data }] = useMutation(CREATE_POST, {
    refetchQueries: [GET_POST]
  })

  if (error) {
    console.log('error from form', error)
  }

  if (loading) {
    console.log('loading from form', loading)
  }

  if (data) {
    console.log('data from form', data)
  }

  const closeForm = () => {
    if (form.age && form.gender && form.gradYear && form.program && form.degree
    && form.firstPosition && form.jobHuntDuration && form.yearsOfExperience && form.positionTitle
     && form.locationOfEmployment && form.typeOfEmployment && form.state &&
    form.salary && form.negotiation) {
      showForm = false;
      toggle();
    }
  }

  const handleChange = (e) => {
    e.target.classList.add("active");
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (form.age && form.gender && form.gradYear && form.program && form.degree
    && form.firstPosition && form.jobHuntDuration && form.yearsOfExperience && form.positionTitle
     && form.locationOfEmployment && form.typeOfEmployment && form.state &&
    form.salary && form.negotiation) {
      createPost({
        variables: {
          username: form.username,
          gender: form.gender,
          age: form.age,
          gradYear: form.gradYear,
          program: form.program,
          degree: form.degree,
          firstPosition: form.firstPosition,
          jobHuntDuration: form.jobHuntDuration,
          yearsOfExperience: form.yearsOfExperience,
          positionTitle: form.positionTitle,
          company: form.company,
          locationOfEmployment: form.locationOfEmployment,
          typeOfEmployment: form.typeOfEmployment,
          state: form.state,
          negotiation: form.negotiation,
          salary: form.salary
        }
      })
    } else {
      setFormError(true)
    }
    clearForm();
  }

const clearForm = () => {
   setForm({...initialState})
 }

    return (
      <div>
        <form onSubmit={(e) => submitForm(e)}>
        <h2>Enter your information and position information:</h2>
        <label>
          Name:
          <input
            className="name-control"
            placeholder="Name"
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Gender:*
          <select
            className="gender-control"
            name="gender"
            value={form.gender}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Transgender">Transgender</option>
            <option value="Non-Binary/Non-Conforming">
              Non-Binary/Non-Conforming
            </option>
            <option value="Prefer not to respond">Prefer not to respond</option>
          </select>
        </label>
        <label>
          Age:*
          <select
            className="age"
            name="age"
            value={form.age}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled selected>
              Age
            </option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65+">65+</option>
          </select>
        </label>
        <label>
          Year Graduated:*
          <select
            className="gradYear"
            name="gradYear"
            value={form.gradYear}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled selected>
              Year Graduated
            </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
          </select>
        </label>
        <label>
          Program:*
          <input
            className="backend"
            type="radio"
            name="program"
            value="BE"
            onChange={(e) => handleChange(e)}
            required
          />
          BE
          <input
            className="frontend"
            type="radio"
            name="program"
            value="FE"
            onChange={(e) => handleChange(e)}
            required
          />
          FE
        </label>
        <label>
          Years of Experience:*
          <input
            className="yearsOfExperience"
            type="number"
            placeholder="Years of Experience"
            name="yearsOfExperience"
            value={form.yearsOfExperience}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <label>
          Degree?:*
          <select
            className="degree"
            name="degree"
            value={form.degree}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled selected>
              Degree Type
            </option>
            <option value="NO DEGREE">NO DEGREE</option>
            <option value="NOT CS RELATED"> NOT CS RELATED</option>
            <option value="CS RELATED"> CS RELATED</option>
          </select>
        </label>
        <label>
          State you resided in during this position:*
          <select
            className="state"
            name="state"
            value={form.state}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled selected>
              State
            </option>
            <option value="AK">AK</option>
            <option value="AL">AL</option>
            <option value="AR">AR</option>
            <option value="AS">AS</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MP">MP</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="PR">PR</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UM">UM</option>
            <option value="UT">UT</option>
            <option value="VA">VA</option>
            <option value="VI">VI</option>
            <option value="VT">VT</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </select>
        </label>
        <label>
          First Position out of Turing?:*
          <input
            className="yes"
            name="firstPosition"
            type="radio"
            value="Yes"
            onChange={(e) => handleChange(e)}
            required
          />
          Yes
          <input
            className="no"
            name="firstPosition"
            type="radio"
            value="No"
            onChange={(e) => handleChange(e)}
            required
          />
          No
        </label>
        <label>
          Days Searching for Position:*
          <input
            className="jobHuntDuration"
            name="jobHuntDuration"
            type="number"
            placeholder="30"
            value={form.jobHuntDuration}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <label>
          Salary:*
          <input
            className="salary"
            name="salary"
            type="number"
            placeholder="60,000"
            value={form.salary}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <label>
          Position Title:*
          <input
            className="positionTitle"
            name="positionTitle"
            type="text"
            placeholder="Position Title"
            value={form.positionTitle}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <label>
          Type of Employment:*
          <input
            className="part-time"
            name="typeOfEmployment"
            type="radio"
            value="Part-Time"
            onChange={(e) => handleChange(e)}
            required
          />
          Part-Time
          <input
            className="full-time"
            name="typeOfEmployment"
            type="radio"
            value="Full-Time"
            onChange={(e) => handleChange(e)}
            required
          />
          Full-Time
          <input
            className="contract"
            name="typeOfEmployment"
            type="radio"
            value="Contract"
            onChange={(e) => handleChange(e)}
            required
          />
          Contract
          <input
            className="intern"
            name="typeOfEmployment"
            type="radio"
            value="Intern/Apprentice"
            onChange={(e) => handleChange(e)}
            required
          />
          Intern/Apprentice
        </label>
        <label>
          Location of Employment:*
          <input
            className="in-person"
            name="locationOfEmployment"
            type="radio"
            value="In-Person"
            onChange={(e) => handleChange(e)}
            required
          />
          In-Person
          <input
            className="hybrid"
            name="locationOfEmployment"
            type="radio"
            value="Hybrid"
            onChange={(e) => handleChange(e)}
            required
          />
          Hybrid
          <input
            className="remote"
            name="locationOfEmployment"
            type="radio"
            value="Remote"
            onChange={(e) => handleChange(e)}
            required
          />
          Remote
        </label>
        <label>
          Company Name:
          <input
            className="company"
            name="company"
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Did you negotiation the salary?:*
          <input
            className="yes"
            name="negotiation"
            type="radio"
            value="Yes"
            onChange={(e) => handleChange(e)}
            required
          />
          Yes
          <input
            className="no"
            name="negotiation"
            type="radio"
            value="No"
            onChange={(e) => handleChange(e)}
            required
          />
          No
        </label>
        {formError && <p>Please fill out all fields</p>}
        <button className="submit-btn" onClick={closeForm}>Submit</button>
      </form>
      </div>
    );
  }


export default Form;
