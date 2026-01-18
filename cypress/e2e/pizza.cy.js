describe("Fulltest", () => {
  it("test starts from home page and checks form values and states till the success page", () => {
    const testData = {
      size: "M",
      dough: "Çıtır",
      ingrediens: [
        "Pepperoni",
        "Sosis",
        "Tavuk Izgara",
        "Domates",
        "Mısır",
        "Sarımsak",
        "Biber",
        "Sucuk",
        "Ananas",
        "Jalepeno",
      ],
      note: "sipariş notu",
    };
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='go-to-order']").click();
    cy.url().should("include", "/order");
    cy.get("[data-cy='formSubmit']").should("be.disabled");
    cy.get("[data-cy='sizeSelection']").contains(`${testData.size}`).click();
    cy.get("[data-cy='doughSelection']").select(`${testData.dough}`);
    cy.get("[data-cy='formSubmit']").should("be.enabled");
    testData.ingrediens.forEach((item) => {
      cy.get('[data-cy="ingredientSelection"]').check(`${item}`);
    });
    cy.get("[data-cy='orderNote']").type(`${testData.note}`);

    cy.get('[data-cy="decreaseCount"]').should("be.disabled");
    cy.get('[data-cy="increaseCount"]').click();
    cy.get('[data-cy="decreaseCount"]').should("be.enabled");
    cy.get("[data-cy='formSubmit']").click();
    cy.url().should("include", "/order/success");

    cy.get("[data-cy='doughSize']")
      .contains(`${testData.size}`)
      .should("exist");
    cy.get("[data-cy='doughType']")
      .contains(`${testData.dough}`)
      .should("exist");
    cy.get("[data-cy='doughSize']")
      .contains(`${testData.size}`)
      .should("exist");
    testData.ingrediens.forEach((item) => {
      cy.get('[data-cy="ingredientsList"]')
      .contains(`${item}`).should("exist");
    });
  });
});
