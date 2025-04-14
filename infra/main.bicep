targetScope = 'subscription'

@description('プロジェクト名')
param projectName string

@minLength(1)
@maxLength(64)
@description('環境名')
param environmentName string

@minLength(1)
@description('リージョン名')
param location string

var tags = {
  'azd-env-name': environmentName
}

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-${projectName}-${environmentName}'
  location: location
  tags: tags
}

module appInsights 'appInsights.bicep' = {
  name: 'app-insights'
  scope: rg
  params: {
    projectName: projectName
    environmentName: environmentName
    location: location
  }
}

module appService 'appService.bicep' = {
  name: 'app-service'
  scope: rg
  params: {
    projectName: projectName
    environmentName: environmentName
    location: location
    appInsightsConnectionString: appInsights.outputs.connectionString
    tags: tags
  }
}
