import React from "react";
import "./Form.css";
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersname: "",
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.target.classList.add("active");

    this.setState({
      [e.target.name]: e.target.value,
    });

    this.handleSubmit(e.target.name);
  }

  handleSubmit(e) {
    console.log(this.state)
  }

  clearForm() {
    this.setState({
      usersname: "",
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
    });
  }
  render() {
    return (
      <div>
      <form noValidate>
        <h2>Enter your information and position information:</h2>
        <label>
          Name:
          <input
            className="name-control"
            placeholder="Name"
            type="text"
            name="usersname"
            ref="usersname"
            value={this.state.usersname}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Gender:*
          <select
            className="gender-control"
            name="gender"
            ref="gender"
            value={this.state.gender}
            onChange={this.handleChange}
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
            ref="age"
            value={this.state.age}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              Age
            </option>
            <option value="18-24">18-24</option>
            <option value="25-34"> 25-34</option>
            <option value="35-44"> 35-44</option>
            <option value="45-54"> 45-54</option>
            <option value="55-64"> 55-64</option>
            <option value="65+"> 65+</option>
          </select>
        </label>
        <label>
          Year Graduated:*
          <select
            className="gradYear"
            name="gradYear"
            ref="gradYear"
            value={this.state.gradYear}
            onChange={this.handleChange}
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
            ref="backend"
            value={this.state.program}
            onChange={this.handleChange}
            required
          />
          BE
          <input
            className="frontend"
            type="radio"
            name="program"
            ref="frontend"
            value={this.state.program}
            onChange={this.handleChange}
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
            ref="yearsOfExperience"
            value={this.state.yearsOfExperience}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Degree?:*
          <select
            className="degree"
            name="degree"
            ref="degree"
            value={this.state.degree}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              Degree Type
            </option>
            <option value="NO DEGREE">NO DEGREE</option>
            <option value=" NOT CS RELATED"> NOT CS RELATED</option>
            <option value=" CS RELATED"> CS RELATED</option>
          </select>
        </label>
        <label>
          State you resided in during this position:*
          <select
            className="state"
            name="state"
            ref="state"
            value={this.state.state}
            onChange={this.handleChange}
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
            ref="yes"
            value={this.state.firstPosition}
            onChange={this.handleChange}
            required
          />
          Yes
          <input
            className="no"
            name="firstPosition"
            type="radio"
            ref="no"
            value={this.state.firstPosition}
            onChange={this.handleChange}
          />
          No
        </label>
        <label>
          Days Searching for Position:*
          <input
            className="jobHuntDuration"
            name="jobHuntDuration"
            type="number"
            ref="jobHuntDuration"
            placeholder="30"
            value={this.state.jobHuntDuration}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Salary:*
          <input
            className="salary"
            name="salary"
            type="number"
            ref="salary"
            placeholder="60,0000"
            value={this.state.salary}
            onChange={this.handleChange}
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
            ref="positionTitle"
            value={this.state.positionTitle}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Type of Employment:*
          <input
            className="part-time"
            name="type"
            type="radio"
            ref="part-time"
            value={this.state.typeOfEmployment}
            onChange={this.handleChange}
            required
          />
          Part-Time
          <input
            className="full-time"
            name="type"
            type="radio"
            ref="full-time"
            value={this.state.typeOfEmployment}
            onChange={this.handleChange}
          />
          Full-Time
          <input
            className="contract"
            name="type"
            type="radio"
            ref="contract"
            value={this.state.typeOfEmployment}
            onChange={this.handleChange}
          />
          Contract
          <input
            className="intern"
            name="intern"
            type="radio"
            ref="intern"
            value={this.state.typeOfEmployment}
            onChange={this.handleChange}
          />
          Intern/Apprentice
        </label>
        <label>
          Location of Employment:*
          <input
            className="in-person"
            name="location"
            type="radio"
            ref="in-person"
            value={this.state.locationOfEmployment}
            onChange={this.handleChange}
            required
          />
          In-Person
          <input
            className="hybrid"
            name="location"
            type="radio"
            ref="hybrid"
            value={this.state.locationOfEmployment}
            onChange={this.handleChange}
          />
          Hybrid
          <input
            className="remote"
            name="location"
            type="radio"
            ref="remote"
            value={this.state.locationOfEmployment}
            onChange={this.handleChange}
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
            ref="company"
            value={this.state.company}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Did you negotiation the salary?:*
          <input
            className="yes"
            name="negotiation"
            type="radio"
            ref="yes"
            value={this.state.negotiation}
            onChange={this.handleChange}
            required
          />
          Yes
          <input
            className="no"
            name="negotiation"
            type="radio"
            ref="no"
            value={this.state.negotiation}
            onChange={this.handleChange}
          />
          No
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}
export default Form;
