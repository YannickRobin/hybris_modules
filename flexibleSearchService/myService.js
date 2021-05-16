class MyService {
    constructor() {
        this.catalogVersionService = null,
        this.flexibleSearchService = null,
    }    
    totalCount() {    
        catVersion = this.catalogVersionService.getCatalogVersion("Default", "Online");
        this.catalogVersionService.setSessionCatalogVersions(java.util.Collections.singleton(catVersion));
    
        query = "SELECT {pk} FROM {Product}";
        searchResult = this.flexibleSearchService.search(query);
        
        return searchResult.getTotalCount();
    }
}
    
module.exports = MyService;