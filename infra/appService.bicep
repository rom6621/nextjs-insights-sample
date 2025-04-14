@description('プロジェクト名')
param projectName string

@minLength(1)
@maxLength(64)
@description('環境名')
param environmentName string

@minLength(1)
@description('リージョン名')
param location string

@description('Application Insightsの接続文字列')
param appInsightsConnectionString string

param tags object = {}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'asp-${projectName}-${environmentName}'
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: 'web-${projectName}-${environmentName}'
  tags: union(tags, { 'azd-service-name': 'app' })
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'node|20-lts'
      appCommandLine: 'node server.js'
      appSettings: [
        {
          name: 'APPLICATIONINSIGHTS_CONNECTION_STRING'
          value: appInsightsConnectionString
        }
        {
          name: 'NEXT_PUBLIC_APPLICATION_INSIGHTS_CONNECTION_STRING'
          value: appInsightsConnectionString
        }
     ]
    }
  }
}
