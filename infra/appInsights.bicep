@description('プロジェクト名')
param projectName string

@minLength(1)
@maxLength(64)
@description('環境名')
param environmentName string

@minLength(1)
@description('リージョン名')
param location string

resource workspace 'Microsoft.OperationalInsights/workspaces@2020-08-01' = {
  name: 'workspace-${projectName}-${environmentName}'
  location: location
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'insights-${projectName}-${environmentName}'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Request_Source: 'rest'
    WorkspaceResourceId: workspace.id
  }
}

output connectionString string = appInsights.properties.ConnectionString
