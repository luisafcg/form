import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import ProyectoUnoPO from "../../support/PageObjects/ProyectoUno/ProyectoUno_PO"

const master = new ProyectoUnoPO()

Given ('the enter to url',()=>{
   // cy.visit('https://www.google.com/')
   master.visitUrl()
})

//Given ('the use enter {word} {word}', (name,name2)=>{
  //  master.enterDataLastName(name+ " "+name2)
//})

Given ('the use enter {string}', (name)=>{
    master.enterDataLastName(name)
})