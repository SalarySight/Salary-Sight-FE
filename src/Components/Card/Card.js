import "./Card.css";
import { Card as Cardd, Statistic, Grid } from "semantic-ui-react";
const Card = ({
  name,
  age,
  gender,
  gradYear,
  company,
  yearsExp,
  degree,
  state,
  salary,
  negotiate,
  positionTitle,
  typeOfEmp,
  locationOfEmp,
  jobHuntDuration,
}) => {
  return (
    <Cardd>
      <Cardd.Content>
        <Cardd.Header> {name ? name : "Anonymous"}</Cardd.Header>
        <Statistic.Group size="tiny" widths="two">
          <Statistic>
            <Statistic.Label>salary</Statistic.Label>
            <Statistic.Value>${salary}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>job title</Statistic.Label>
            <Statistic.Value>{positionTitle}</Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Cardd.Content>
      <Cardd.Content>
        <Statistic.Group size="mini" widths="two">
          <Statistic>
            <Statistic.Label>company</Statistic.Label>
            <Statistic.Value>{company}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>WFH or Commute?</Statistic.Label>
            <Statistic.Value>{locationOfEmp}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>term</Statistic.Label>
            <Statistic.Value>{typeOfEmp}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>{yearsExp}</Statistic.Value>
            <Statistic.Label>years of experience</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group size="mini" widths="one">
          <Statistic>
            <Statistic.Label>Age</Statistic.Label>
            <Statistic.Value>{age}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>gender identity</Statistic.Label>
            <Statistic.Value>{gender}</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>{state}</Statistic.Value>
            <Statistic.Label>state</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{jobHuntDuration}</Statistic.Value>
            <Statistic.Label>time to get a job</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{negotiate}</Statistic.Value>
            <Statistic.Label>did they negotiate?</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Cardd.Content>
    </Cardd>
  );
};

export default Card;
