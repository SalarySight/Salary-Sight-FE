import { useState } from "react";
import "./Form.css";
import { useMutation } from '@apollo/client';
import { GET_POST, CREATE_POST } from '../..'


// import { postForm } from "../utils/postForm";

const initialState = {
  username: "",
  gender: "",
  age: 0,
  gradYear: "",
  program: "",
  degree: "",
  firstPosition: "",
  jobHuntDuration: 0,
  yearsOfExperience: 0,
  positionTitle: "",
  company: "",
  locationOfEmployment: "",
  typeOfEmployment: "",
  state: "",
  negotiation: "",
  salary: 0
}

const Form = () => {
  const [form, setForm] = useState(initialState)
  let [selectedRadio, setSelectedRadio] = useState(null)
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

  const handleChange = (e) => {
    // console.log('form values', form)
    // console.log('')
    console.log(e.target)
    e.target.classList.add("active");
    const { name, value } = e.target;
    // setForm((prevState) => ({ ...prevState, [name]: value }));
    // setSelectedRadio()
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log('form data', form)
    createPost({
      variables: {
        username: form.username,
        gender: form.gender,
        age: parseInt(form.age),
        gradYear: form.gradYear,
        program: form.program,
        degree: form.degree,
        firstPosition: form.firstPosition,
        jobHuntDuration: parseInt(form.jobHuntDuration),
        yearsOfExperience: parseInt(form.yearsOfExperience),
        positionTitle: form.positionTitle,
        company: form.company,
        location: form.locationOfEmployment,
        type: form.typeOfEmployment,
        state: form.state,
        negotiation: form.negotiation,
        salary: parseInt(form.salary)
      }
    })
    clearForm();
  }

const clearForm = () => {
   setForm({...initialState})
 }

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       username: "",
//       gender: "",
//       age: 0,
//       gradYear: "",
//       program: "",
//       degree: "",
//       firstPosition: "",
//       jobHuntDuration: 0,
//       yearsOfExperience: 0,
//       positionTitle: "",
//       company: "",
//       locationOfEmployment: "",
//       typeOfEmployment: "",
//       state: "",
//       negotiation: "",
//       salary: 0
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(e) {
    // e.target.classList.add("active");
//
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//
//   handleSubmit(e) {
//     console.log('form state', this.state)
//     const formObj = {
      // username: this.state.username,
      // gender: this.state.gender,
      // age: this.state.age,
      // gradYear: this.state.gradYear,
      // program: this.state.program,
      // degree: this.state.degree,
      // firstPosition: this.state.firstPosition,
      // jobHuntDuration: this.state.jobHuntDuration,
      // yearsOfExperience: this.state.yearsOfExperience,
      // positionTitle: this.state.positionTitle,
      // company: this.state.company,
      // locationOfEmployment: this.state.locationOfEmployment,
      // typeOfEmployment: this.state.typeOfEmployment,
      // state: this.state.state,
      // negotiation: this.state.negotiation,
      // salary: this.state.salary
//     }
//     postForm(formObj)
//     // e.target.reset();
//     this.clearForm();
//   }
//
  // clearForm() {
  //   this.setState({
  //     username: "",
  //     gender: "",
  //     age: 0,
  //     gradYear: "",
  //     program: "",
  //     degree: "",
  //     firstPosition: "",
  //     jobHuntDuration: 0,
  //     yearsOfExperience: 0,
  //     positionTitle: "",
  //     company: "",
  //     locationOfEmployment: "",
  //     typeOfEmployment: "",
  //     state: "",
  //     negotiation: "",
  //     salary: 0
  //   });
  // }

  // <form onSubmit={(e) => e.preventDefault()}>

    return (
      <div>
        <form>
        <h2>Enter your information and position information:</h2>
        <label>
          Name:
          <input
            className="name-control"
            placeholder="Name"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:*
          <select
            className="gender-control"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Transgender">Transgender</option>
            <option value="Non-binary/non-conforming">
              Non-binary/non-conforming
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
          BE
          <input
            className="frontend"
            type="radio"
            name="program"
            value="FE"
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree?:*
          <select
            className="degree"
            name="degree"
            value={form.degree}
            onChange={handleChange}
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
            onChange={handleChange}
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
            <option value="GU">GU</option>
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
            onChange={handleChange}
            required
          />
          Yes
          <input
            className="no"
            name="firstPosition"
            type="radio"
            value="No"
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Salary:*
          <input
            className="salary"
            name="salary"
            type="number"
            placeholder="60,0000"
            value={form.salary}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Type of Employment:*
          <input
            className="part-time"
            name="type"
            type="radio"
            value="Part-Time"
            onChange={handleChange}
            required
          />
          Part-Time
          <input
            className="full-time"
            name="type"
            type="radio"
            value="Full-Time"
            onChange={handleChange}
          />
          Full-Time
          <input
            className="contract"
            name="type"
            type="radio"
            value="Contract"
            onChange={handleChange}
          />
          Contract
          <input
            className="intern"
            name="intern"
            type="radio"
            value="Intern/Apprentice"
            onChange={handleChange}
          />
          Intern/Apprentice
        </label>
        <label>
          Location of Employment:*
          <input
            className="in-person"
            name="location"
            type="radio"
            value="In-Person"
            onChange={handleChange}
            required
          />
          In-Person
          <input
            className="hybrid"
            name="location"
            type="radio"
            value="Hybrid"
            onChange={handleChange}
          />
          Hybrid
          <input
            className="remote"
            name="location"
            type="radio"
            value="Remote"
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Did you negotiation the salary?:*
          <input
            className="yes"
            name="negotiation"
            type="radio"
            value="Yes"
            onChange={handleChange}
            required
          />
          Yes
          <input
            className="no"
            name="negotiation"
            type="radio"
            value="No"
            onChange={handleChange}
          />
          No
        </label>
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>
      </div>
    );
  }



export default Form;
