name            = "nss-adapt-dev-vpc"
cidr            = "10.18.0.0/16"
azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
private_subnets = ["10.18.0.0/19", "10.18.64.0/19", "10.18.128.0/19"]
public_subnets  = ["10.18.48.0/20", "10.18.112.0/20", "10.18.176.0/20"]
