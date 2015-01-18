var module = angular.module('api', ['ngResource']),
    factory = module.factory,
    provider = module.provider,
    extend = angular.extend,
	forEach = angular.forEach,
    apiBaseUrl = window.apiConfig.baseUrl,
    apiBaseResourceUrl = apiBaseUrl.replace(/:(?=\d+)/g, '\\:');
