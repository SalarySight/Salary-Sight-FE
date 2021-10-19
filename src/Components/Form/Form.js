import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        {" "}
        Name:
        <input
          type="text"
          placeholder="Name"
          {...register("name", { maxLength: 80 })}
        />
      </label>
      <label>
        {" "}
        Gender:*
        <select {...register("gender", { required: true })}>
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
        {" "}
        Age:*
        <select {...register("age", { required: true })}>
          <option value="" disabled selected>
            Age
          </option>
          <option value="18-24">18-24</option>
          <option value=" 25-34"> 25-34</option>
          <option value=" 35-44"> 35-44</option>
          <option value=" 45-54"> 45-54</option>
          <option value=" 55-64"> 55-64</option>
          <option value=" 65+"> 65+</option>
        </select>
      </label>
      <label>
        {" "}
        Year Graduated:*
        <select {...register("year-graduated", { required: true })}>
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
        {" "}
        Program:*
        <input
          {...register("program", { required: true })}
          type="radio"
          value="BE"
        />
        BE
        <input
          {...register("program", { required: true })}
          type="radio"
          value="FE"
        />
        FE
      </label>
      <label>
        {" "}
        Years of Experience:*
        <input
          type="number"
          placeholder="Experience (in years)"
          {...register("experience", {
            required: true,
            max: 30,
            min: 0,
          })}
        />
      </label>
      <label>
        {" "}
        Degree?:*
        <select {...register("degree", { required: true })}>
          <option value="" disabled selected>
            Degree Type
          </option>
          <option value="NO DEGREE">NO DEGREE</option>
          <option value=" NOT CS RELATED"> NOT CS RELATED</option>
          <option value=" CS RELATED"> CS RELATED</option>
        </select>
      </label>
      <label>
        {" "}
        State you resided in during this position:*
        <select {...register("state", { required: true })}>
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
        {" "}
        Salary:*
        <input
          type="number"
          placeholder="Salary (yearly)"
          {...register("salary", { required: true })}
        />
      </label>
      <label>
        {" "}
        Position Title:*
        <input
          type="text"
          placeholder="Position Title"
          {...register("position-title", { required: true })}
        />
      </label>
      <label>
        {" "}
        Type of Employment:*
        <input
          {...register("type-of-employment", { required: true })}
          type="radio"
          value="Part-Time"
        />
        Part-Time
        <input
          {...register("type-of-employment", { required: true })}
          type="radio"
          value="Full-Time"
        />
        Full-Time
        <input
          {...register("type-of-employment", { required: true })}
          type="radio"
          value="Contract"
        />
        Contract
        <input
          {...register("type-of-employment", { required: true })}
          type="radio"
          value="Temporary"
        />
        Temporary
      </label>
       <label>
        {" "}
        Location of Employment:*
        <input
          {...register("location-of-employment", { required: true })}
          type="radio"
          value="In-Person"
        />
        In-Person
        <input
          {...register("location-of-employment", { required: true })}
          type="radio"
          value="Hybrid"
        />
        Hybrid
        <input
          {...register("location-of-employment", { required: true })}
          type="radio"
          value="Remote"
        />
        Remote
      </label>
      <label>
        Did you negotiate the salary?:*
        <input
          {...register("negotiate", { required: true })}
          type="radio"
          value="Yes"
        />
        Yes
        <input
          {...register("negotiate", { required: true })}
          type="radio"
          value="No"
        />
        No
      </label>
      <label>
        {" "}
        Company Name:
        <input
          type="text"
          placeholder="Company Name"
          {...register("company-name", {})}
        />
      </label>
      <input type="submit"/>
    </form>
  );
}
