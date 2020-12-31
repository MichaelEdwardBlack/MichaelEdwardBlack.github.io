# How to Configure and Update your Dotnet Core App Secrets

## Configure your Application

1. Configure your [ASP.NET Core settings](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1)
2. Set up secret key-value pairs in your appsettings.json file
    - Replace sensitive values with the word `secret`
    - Example:
      ```
      {
        "Position": {
          "Title": "Editor",
          "Name": "Joe Smith"
        },
        "MyKey":  "secret",
        "Logging": {
          "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
          }
        },
        "AllowedHosts": "*",
        "NestedSecrets": {
          "AccessToken": "secret",
          "SubscriptionKey": "secret"
        }
      }
      ```
