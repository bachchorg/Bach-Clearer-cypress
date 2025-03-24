export class Helper{
    navigateTo(url) {
        cy.visit(url);
    }
}
export class FilterComponent extends Helper {

    elements = {
        colourBtn : (colour) => cy.get(`[title= "Find product with Color is ${colour}"]`),
        minPriceinput : () => cy.get('[aria-label="Min value"]'),
        maxPriceinput : () => cy.get('[aria-label="Max value"]'),
        productComponent: () => cy.get('[data-product-id]'),


    };
    static navigateTo(url) {
        cy.visit(url);
    }

    filterByColour(colour){
        this.elements.colourBtn(colour).click();
    }

    inputPrice(minPrice,maxPrice){
        this.elements.minPriceinput().type(minPrice);
        this.elements.maxPriceinput().type(maxPrice);
    }
    assertColour(colour){
        this.elements.productComponent().each(($el) => {
            cy.wrap($el).invoke('attr','data-product').then((dataproduct) => {
                // cy.log(JSON.stringify(dataproduct)) 
                cy.log(JSON.parse(dataproduct).options_with_values[1].values) 
                // don't know where to assert for unique black colour that proves the filter is working
            })
        })
            
            
    }

}

export class ISearchTestComponent{
    
    elements = {
        iSearchinput : () => cy.get('.boost-drawer-open-search-top').siblings().find('input[placeholder="Search"]'),
      };
    searchForProduct(product){
        // Before searching the product, the search input should be hidden
        this.elements.iSearchinput().then(($el) => {
            cy.wrap($el).invoke('attr','aria-expanded').should('eq','false');
        })
        // Search action
        this.elements.iSearchinput().type(product);
         // After searching the product, the search input should be collapsed
         this.elements.iSearchinput().then(($el) => {
            cy.wrap($el).invoke('attr','aria-expanded').should('eq','true');
        })
    }
}

