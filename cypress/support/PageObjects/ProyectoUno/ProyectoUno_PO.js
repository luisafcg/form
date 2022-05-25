class ProyectoUnoPO{

    visitUrl(){
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
        cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
    }

    enterToInformation(firstName, lastName,email,phone, adress,city,state,
        zipCode,website, projectDescription){
            cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').type(firstName)
            cy.get('[name="last_name"]').type(lastName)
            cy.get('[name="email"]').type(email)
            cy.get('[name="phone"]').type(phone)
            cy.get('[placeholder="Address"]').type(adress)
            cy.get('[name="city"]').type(city)
            cy.get('.selectpicker').select(state)
            cy.get('[name="zip"]').type(zipCode)
            cy.get('[name="website"]').type(website)
            cy.get('[type="radio"]').filter('[value="no"]').click()
            cy.get('[name="comment"]').type(projectDescription)
            cy.get('[type="submit"]').filter('.btn-default').click()
            cy.screenshot('Enter information')
        }

    validateEmail(email,texto){
           cy.get('[name="email"]').clear().type(email)
           cy.get('.help-block').filter('[data-bv-validator="emailAddress"]').should('have.text', texto)
           cy.screenshot('Email v')

    }

    enterDataLastName(firstName){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').type(firstName)

    }

    
} //Finaliza mi clase

export default ProyectoUnoPO
