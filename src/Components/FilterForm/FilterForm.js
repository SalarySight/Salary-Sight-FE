import "./FilterForm.css";
import { useState, useEffect, useRef } from "react";
import {
  Dropdown,
  Menu,
  Grid,
  Checkbox,
  Header,
  Icon,
  Image,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";
const FilterForm = ({ handleFilterChange, salaryPosts }) => {
  const [addFilterOpt, setAddFilterOpt] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);
  const [visible, setVisible] = useState(false);
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
  const sortOptions = [
    { key: "low to high", text: "low to high", value: "low to high" },
    { key: "high to low", text: "high to low", value: "high to low" },
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
      <Grid columns={1}>
        <Grid.Column>
          <Button
            checked={visible}
            label={{ children: <code>visible</code> }}
            onClick={(e, data) => setVisible(true)}
          />
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              animation="overlay"
              icon="labeled"
              onHide={() => setVisible(false)}
              visible={visible}
              width="thin"
            >
              <Dropdown
                placeholder="Age"
                fluid
                search
                clearable
                selection
                multiple
                options={ageOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
              <Dropdown
                placeholder="Gender"
                fluid
                search
                clearable
                selection
                multiple
                options={genderOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
              <Dropdown
                placeholder="Company"
                fluid
                search
                clearable
                selection
                multiple
                options={companyOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
              <Dropdown
                placeholder="sort"
                fluid
                clearable
                selection
                options={sortOptions}
                onChange={(el, e) => handleFilterChange(e.placeholder, e.value)}
              />
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Header as="h3">Application Content</Header>
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default FilterForm;
