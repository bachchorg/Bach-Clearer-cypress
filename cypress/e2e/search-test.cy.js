import {Helper, FilterComponent, ISearchTestComponent} from '../support/pom/main'
describe('Search test', () => {
    const helper = new Helper();
    const filterComponent = new FilterComponent();
    const iSearchTestComponent = new ISearchTestComponent();
    const keyword = []
    before(() => {
        cy.fixture('isearch.json').then((keywords) => {
            keywords.forEach((item) => {
                keyword.push(item); // Push each item into the keyword array
            });
        })
    })
    it('Verify search behavior valid when search for a valid result ', () => {
        cy.visit('/collections/vertical-layout');
        iSearchTestComponent.searchForProduct(keyword[0].keyword)

    }) 
    
    it('Verify search behavior valid when search for an invalid result', ()=> {
        cy.visit('/collections/vertical-layout');
        iSearchTestComponent.searchForProduct(keyword[1].keyword)

    })

    it('Verify search behavior valid when search for a valid result', ()=> {
        cy.visit('/collections/vertical-layout');
        iSearchTestComponent.searchForProduct(keyword[2].keyword)

    })
    
})