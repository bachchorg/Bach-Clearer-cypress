import {Helper, FilterComponent, ISearchTestComponent} from '../support/pom/main'
describe('Filter test', () => {
    const helper = new Helper();
    const filterComponent = new FilterComponent();
    const iSearchTestComponent = new ISearchTestComponent();
    it('Verify filter behavior when user filter Black colour', () => {
        cy.visit('/collections/vertical-layout');
        filterComponent.filterByColour('Black');
        filterComponent.assertColour('Black')


    }) 
})