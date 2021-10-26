import "./FilterForm.css";
import { useState, useEffect, useRef } from "react";
import { Dropdown, Menu, Grid } from "semantic-ui-react";
const FilterForm = ({ handleFilterChange, salaryPosts }) => {
  const [addFilterOpt, setAddFilterOpt] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const companyRef = useRef(0);

  const ageOptions = [
    { key: "18-24", text: "18-24", value: "18-24" },
    { key: "25-34", text: "25-34", value: "25-34" },
    { key: "35-44", text: "35-44", value: "35-44" },
  ];

  const genderOptions = [
    { key: "Woman", text: "Woman", value: "Woman" },
    { key: "Man", text: "Man", value: "Man" },
    { key: "Transgender", text: "Transgender", value: "Transgender" },
  ];

  function getCompanyOptions() {
    if (salaryPosts.posts) {
      const options = salaryPosts.posts.map(function (post) {
        return { key: post.company, text: post.company, value: post.company };
      });
      const distinctOptions = [];
      const map = new Map();
      for (const item of options) {
        if (!map.has(item.key)) {
          map.set(item.key, true); // set any value to Map
          distinctOptions.push({
            key: item.key,
            text: item.key,
            value: item.key,
          });
        }
      }
      setCompanyOptions(distinctOptions);
    }
  }

  useEffect(() => {
    companyRef.current++;
    if (companyRef.current < 4) {
      getCompanyOptions();
    }
  });

  return (
    <>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Menu secondary>
              <Dropdown
                placeholder="Age"
                fluid
                search
                clearable
                selection
                options={ageOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
              <Dropdown
                placeholder="Gender"
                fluid
                search
                clearable
                selection
                options={genderOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
              <Dropdown
                placeholder="Company"
                fluid
                search
                clearable
                selection
                options={companyOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default FilterForm;
