
## Build Templates der Microservices



**Statische Webb App**

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "staticSites_onlyfans_shop_name": {
            "defaultValue": "onlyfans-shop",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Web/staticSites",
            "apiVersion": "2024-04-01",
            "name": "[parameters('staticSites_onlyfans_shop_name')]",
            "location": "West Europe",
            "sku": {
                "name": "Free",
                "tier": "Free"
            },
            "properties": {
                "repositoryUrl": "https://github.com/Jonas-dacode/M300",
                "branch": "main",
                "stagingEnvironmentPolicy": "Enabled",
                "allowConfigFileUpdates": true,
                "provider": "GitHub",
                "enterpriseGradeCdnStatus": "Disabled"
            }
        },
        {
            "type": "Microsoft.Web/staticSites/basicAuth",
            "apiVersion": "2024-04-01",
            "name": "[concat(parameters('staticSites_onlyfans_shop_name'), '/default')]",
            "location": "West Europe",
            "dependsOn": [
                "[resourceId('Microsoft.Web/staticSites', parameters('staticSites_onlyfans_shop_name'))]"
            ],
            "properties": {
                "applicableEnvironmentsMode": "SpecifiedEnvironments"
            }
        }
    ]
}
```

---

**CosmosDB:**

```json
{
    "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "databaseAccounts_onlyfans_webshop_name": {
            "defaultValue": "onlyfans-webshop",
            "type": "String"
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.DocumentDB/databaseAccounts",
            "apiVersion": "2024-12-01-preview",
            "name": "[parameters('databaseAccounts_onlyfans_webshop_name')]",
            "location": "UK West",
            "tags": {
                "defaultExperience": "Core (SQL)",
                "hidden-workload-type": "Learning",
                "hidden-cosmos-mmspecial": ""
            },
            "kind": "GlobalDocumentDB",
            "identity": {
                "type": "None"
            },
            "properties": {
                "publicNetworkAccess": "Enabled",
                "enableAutomaticFailover": true,
                "enableMultipleWriteLocations": false,
                "isVirtualNetworkFilterEnabled": false,
                "virtualNetworkRules": [],
                "disableKeyBasedMetadataWriteAccess": false,
                "enableFreeTier": false,
                "enableAnalyticalStorage": false,
                "analyticalStorageConfiguration": {
                    "schemaType": "WellDefined"
                },
                "createMode": "Default",
                "databaseAccountOfferType": "Standard",
                "enableMaterializedViews": false,
                "capacityMode": "Serverless",
                "defaultIdentity": "FirstPartyIdentity",
                "networkAclBypass": "None",
                "disableLocalAuth": false,
                "enablePartitionMerge": false,
                "enablePerRegionPerPartitionAutoscale": false,
                "enableBurstCapacity": false,
                "enablePriorityBasedExecution": false,
                "defaultPriorityLevel": "High",
                "minimalTlsVersion": "Tls12",
                "consistencyPolicy": {
                    "defaultConsistencyLevel": "Session",
                    "maxIntervalInSeconds": 5,
                    "maxStalenessPrefix": 100
                },
                "locations": [
                    {
                        "locationName": "UK West",
                        "failoverPriority": 0,
                        "isZoneRedundant": false
                    }
                ],
                "cors": [],
                "capabilities": [],
                "ipRules": [],
                "backupPolicy": {
                    "type": "Continuous",
                    "continuousModeProperties": {
                        "tier": "Continuous7Days"
                    }
                },
                "networkAclBypassResourceIds": [],
                "diagnosticLogSettings": {
                    "enableFullTextQuery": "None"
                },
                "capacity": {
                    "totalThroughputLimit": 4000
                }
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/sqlDatabases",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/BestellungenDB')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "resource": {
                    "id": "BestellungenDB"
                }
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/00000000-0000-0000-0000-000000000001')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "roleName": "Cosmos DB Built-in Data Reader",
                "type": "BuiltInRole",
                "assignableScopes": [
                    "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
                ],
                "permissions": [
                    {
                        "dataActions": [
                            "Microsoft.DocumentDB/databaseAccounts/readMetadata",
                            "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/executeQuery",
                            "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/readChangeFeed",
                            "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read"
                        ],
                        "notDataActions": []
                    }
                ]
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/00000000-0000-0000-0000-000000000002')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "roleName": "Cosmos DB Built-in Data Contributor",
                "type": "BuiltInRole",
                "assignableScopes": [
                    "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
                ],
                "permissions": [
                    {
                        "dataActions": [
                            "Microsoft.DocumentDB/databaseAccounts/readMetadata",
                            "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/*",
                            "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/*"
                        ],
                        "notDataActions": []
                    }
                ]
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/tableRoleDefinitions",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/00000000-0000-0000-0000-000000000001')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "roleName": "Cosmos DB Built-in Data Reader",
                "type": "BuiltInRole",
                "assignableScopes": [
                    "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
                ],
                "permissions": [
                    {
                        "dataActions": [
                            "Microsoft.DocumentDB/databaseAccounts/readMetadata",
                            "Microsoft.DocumentDB/databaseAccounts/tables/containers/executeQuery",
                            "Microsoft.DocumentDB/databaseAccounts/tables/containers/readChangeFeed",
                            "Microsoft.DocumentDB/databaseAccounts/tables/containers/entities/read"
                        ],
                        "notDataActions": []
                    }
                ]
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/tableRoleDefinitions",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/00000000-0000-0000-0000-000000000002')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "roleName": "Cosmos DB Built-in Data Contributor",
                "type": "BuiltInRole",
                "assignableScopes": [
                    "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
                ],
                "permissions": [
                    {
                        "dataActions": [
                            "Microsoft.DocumentDB/databaseAccounts/readMetadata",
                            "Microsoft.DocumentDB/databaseAccounts/tables/*",
                            "Microsoft.DocumentDB/databaseAccounts/tables/containers/*",
                            "Microsoft.DocumentDB/databaseAccounts/tables/containers/entities/*"
                        ],
                        "notDataActions": []
                    }
                ]
            }
        },
        {
            "type": "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers",
            "apiVersion": "2024-12-01-preview",
            "name": "[concat(parameters('databaseAccounts_onlyfans_webshop_name'), '/BestellungenDB/Bestellungen')]",
            "dependsOn": [
                "[resourceId('Microsoft.DocumentDB/databaseAccounts/sqlDatabases', parameters('databaseAccounts_onlyfans_webshop_name'), 'BestellungenDB')]",
                "[resourceId('Microsoft.DocumentDB/databaseAccounts', parameters('databaseAccounts_onlyfans_webshop_name'))]"
            ],
            "properties": {
                "resource": {
                    "id": "Bestellungen",
                    "indexingPolicy": {
                        "indexingMode": "consistent",
                        "automatic": true,
                        "includedPaths": [
                            {
                                "path": "/*"
                            }
                        ],
                        "excludedPaths": [
                            {
                                "path": "/\"_etag\"/?"
                            }
                        ]
                    },
                    "partitionKey": {
                        "paths": [
                            "/id"
                        ],
                        "kind": "Hash",
                        "version": 2
                    },
                    "uniqueKeyPolicy": {
                        "uniqueKeys": []
                    },
                    "conflictResolutionPolicy": {
                        "mode": "LastWriterWins",
                        "conflictResolutionPath": "/_ts"
                    },
                    "computedProperties": []
                }
            }
        }
    ]
}
```