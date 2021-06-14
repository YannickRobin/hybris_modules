function getProductTotalCount(spring) {
    catalogVersionService = spring.getBean("catalogVersionService");
    flexibleSearchService = spring.getBean("flexibleSearchService");
    
    catVersion = catalogVersionService.getCatalogVersion("Default", "Online");
    catalogVersionService.setSessionCatalogVersions(java.util.Collections.singleton(catVersion));
    
    query = "SELECT {pk} FROM {Product}";
    searchResult = flexibleSearchService.search(query);
    
    print("Total number of products into the system: " + searchResult.getTotalCount());
    return searchResult.getTotalCount();
};

exports.getProductTotalCount = getProductTotalCount;