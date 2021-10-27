describe("Salary Sight User Flows", () => {
  beforeEach(() => {
    cy.interceptGraphQlCalls()
    cy.visit("http://localhost:3000/")
  });

  it("Should display all salary data on the home page", () => {
      cy.get('*[class^="card"]')
      .contains("Example Username")
      .get('*[class^="card"]')
      .contains("Another Example Username");
  });

  it("Should display filter options", () => {
      cy.get('*[class^="default filter-btn"]')
      .contains("Female/Woman")
      .get('*[class^="default filter-btn"]')
      .contains("Front-End")
      .get('*[class^="default filter-btn"]')
      .contains("18-24")
      .get('*[class^="default filter-btn"]')
      .contains("High to Low");
  });

  it("Should display a login button", () => {
      cy.get('*[class^="login-btn"]')
      .contains("Login");
  });

  describe("GitHub Oauth Login", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("Should allow users to sign in", () => {
      cy.get('*[class^="login-btn"]').contains("Login").click();
      cy.url().should("include", "github.com");
    });
  });

  describe("Posting Data User Flows", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/darlaevans2000");
    });

    it("Should allow users to view submit data form once signed in", () => {
      cy.get('*[class^="submit-btn"]').contains("Submit Salary").click();
      cy.get("form").contains(
        "Enter your information and position information:"
      );
    });

    it("Should allow users to fill out form and submit form", () => {
      cy.get('*[class^="submit-btn"]').contains("Submit Salary").click();
      cy.get("form").contains(
        "Enter your information and position information:"
      );
      cy.get("select.age").select("18-24").should("have.value", "18-24");
      cy.get("select.gender-control")
        .select("Female/Woman")
        .should("have.value", "Female/Woman");
      cy.get("select.gradYear").select("2021").should("have.value", 2021);
      cy.get("input.frontend").click().should("have.value", "FE");
      cy.get("input.yearsOfExperience").type(0).should("have.value", 0);
      cy.get("select.degree")
        .select("NO DEGREE")
        .should("have.value", "NO DEGREE");
      cy.get("select.state").select("CO").should("have.value", "CO");
      cy.get("input.yes-position").click().should("have.value", "Yes");
      cy.get("input.jobHuntDuration").type(14).should("have.value", 14);
      cy.get("input.salary").type(60000).should("have.value", 60000);
      cy.get("input.positionTitle")
        .type("Front-End Web Designer")
        .should("have.value", "Front-End Web Designer");
      cy.get("input.full-time").click().should("have.value", "Full-Time");
      cy.get("input.remote").click().should("have.value", "Remote");
      cy.get("input.negotiation-yes").click().should("have.value", "Yes");
      cy.get('*[class^="submit-salary-btn"]').contains("Submit").scrollIntoView()
      cy.interceptGraphQlCalls();
    });
  });
    describe("Filtering Data User Flows", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.interceptGraphQlCalls()
    });

    it("Should allow users filter salary data", () => {
      cy.get('*[class^="default filter-btn"]').contains("Female/Woman").click();
      cy.get('*[class^="default filter-btn"]').contains("18-24").click();
      cy.get('*[class^="apply-clear-btn"]').contains("Apply Filters").click();
    });


  });
});
