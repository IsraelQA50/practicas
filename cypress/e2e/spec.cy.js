
describe('Escenario de Prueba: Crear tareas en la TODO App para validar su funcionamiento', () => {

  it('Validar el acceso a la TODO App', () => {
      cy.visit('http://todomvc-app-for-testing.surge.sh')
      cy.get('.new-todo').type("comprar el pan{enter}")
      
      
  });


  it('Validar el acceso a la TODO App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("comprar el pan{enter}")
    cy.get('.toggle').click ()

  })


})