terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-backend-rg"
    storage_account_name = "terraformstate123"
    container_name       = "tfstate"
    key                  = "adf-${terraform.workspace}.tfstate"
  }
}
