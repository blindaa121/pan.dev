---
id: prisma-access-config
title: Prisma Access Configuration APIs
description: Prisma Access Configuration APIs
hide_title: false
slug: /docs/prisma-access-config/prisma-access-config
hide_table_of_contents: false
keywords:
  - sase
---
<head>
  <meta name="robots" content="noindex"/>
</head>

## Preview Documentation

** This documentation is in an early preview state. It is subject to change without notice. **

## Welcome to the Prisma Access Configuration APIs

Welcome to the Prisma Access Configuration APIs. To use these APIs, you must be a new Managed
Security Servie Provider (MSSP) customer as of March 2022 and must have configured your multitenancy 
hierarchy for a new deployment of Prisma Access.

The Prisma Access Configuration APIs use [SASE services](/sase-services/docs) for API authorization and access.
After you obtain an [access token](/sase-services/docs/authentication-overview), 
you can use these APIs to configure your Prisma Access deployments.

Generally, to perform a configuration change, you issue one or more configuration 
changes using the [configuration APIs](/sase/api/prisma-access-config). This creates
a _candidate_ configuration. Once you have completed creating your candidate configuration,
you can [push your candidate](/sase/api/prisma-access-config/configuration-management#operation/post-config-v1-config-versions-running-push). This creates a [configuration job](/sase/api/prisma-access-config/configuration-management#operation/get-config-v1-jobs).
Once this job is complete, your candidate configuration becomes your _running_ configuration.

