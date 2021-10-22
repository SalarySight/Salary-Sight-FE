export const getPosts = () => ({
  query:`{
      posts {
        id
        company
        salary
        degree
        positionTitle
        state
        jobHuntDuration
        gender
        age
        yearsOfExperience
      }
    }`,
});

export const postQuery = ({
  username,
  company,
  salary,
  degree,
  positionTitle,
  state,
  jobHuntDuration,
  gender,
  age,
  yearsOfExperience,
  yearGraduated,
  typeOfEmployment,
  locationOfEmployment,
  negotiation,
  firstPosition,
  program,
}) => ({
  query: `mutation {
      createPost(input: {
        username: "${username}"
        company: "${company}"
        salary: ${salary}
        degree: "${degree}"
        positionTitle: "${positionTitle}"
        state: "${state}"
        jobHuntDuration: "${jobHuntDuration}"
        gender: "${gender}"
        age: "${age}"
        yearsOfExperience: "${yearsOfExperience}"
        yearGraduated: "${yearGraduated}"
        program: "${program}"
        typeOfEmployment: "${typeOfEmployment}"
        locationOfEmployment: "${locationOfEmployment}"
        negotiation: "${negotiation}"
        firstPosition: "${firstPosition}"
        userId: <user-id>
        }) {
          post {
            username
            company
            salary
            degree
            positionTitle
            state
            jobHuntDuration
            gender
            age
            yearsOfExperience
            yearGraduated
            typeOfEmployment
            locationOfEmployment
            negotiation
            firstPosition
            program
          }
        }
      }
`,
});
