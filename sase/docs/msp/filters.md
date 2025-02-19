---
id: filters
title: Query Filters
description: Prisma SASE Multitenant Platform query filters
hide_title: false
slug: /docs/filters
hide_table_of_contents: false
keywords:
  - sase
---
<head>
  <meta name="robots" content="noindex"/>
</head>

## Preview Documentation

** This documentation is in an early preview state. It is subject to change without notice. **

## About Query Filters and Properties

There are some filters and properties that are not visible in the [API reference](/sase/api/msp), so they're described here. 

In a POST request body, you will provide a required filter. This is a json object that consists of a required `AND` operator and an array of rules objects. The filter rules basically build the "where clause" of your request. You can use one or more filter rules to customize your request, but you can also use most of the examples in the API reference just as they are.

In a POST request body, you will also provide required properties. This is an array of objects. Property field names will be returned in the API response. You can use one or more properties to customize the response, but you can also use most of the examples in the API reference just as they are.

For example, the following POST request body for [List Threat Summary](/sase/api/msp/dataresources#operation/post-mt-monitor-v1-agg-threats-summary) contains a filter with rules of [Rule2](#rule2), [RuleName3](#rulename3), and [TimeFilter](#timefilter), and properties of [Property6](#property6):

    {
      "filter": {
        "operator": "AND",
        "rules": [
          {
            "operator": "in",
            "property": "severity",
            "values": [
              "Critical",
              "High",
              "Medium"
            ]
          },
          {
            "rule": "unblocked"
          }
        ]
      },
      "properties": [
        {
          "property": "total_threats"
        },
        {
          "property": "unblocked_count"
        }
      ]
    }

The filter, operator, rules, and properties in the example are combined to request a list of the total threats and unblocked count properties where the severity is critical, high, or medium, and unblocked. 

The properties and rules are independent of each other. Though you see a rule name of `unblocked` and a property name of `unblocked_count` in the example, this does not have to be the case. You could use a rule of `blocked` and a property of `unblocked_count` if that's what you want to get from the database.

## Filter ##
A filter is a required json object. It consists of a required `AND` operator and an array of rules objects.

| Property | Type | Description |
| --- | --- | --- |
| filter | required json object | Includes a required `operator` and optional `rules`. 
| operator | required string | Operator to run on the rules. Must be `AND`. 
| rules | array | Array of [filter rules](#filter-rules) objects. 

## Filter Rules ##
For the rules, you can use an array of rule name objects, an array of time objects, or both objects. You can use one or more filter rules to customize your request, but you can also use most of the examples in the [API reference](/sase/api/msp) as they are. 

Some of the parameters are predefined, so you must use exactly what you see in the tables that follow. Some parameters contain choices, so you can decide. 

### AlertRule ###

Object with the following properties:

| Property | Type | Description                                      |
| --- | --- | --- |
| operator | string | Operator to run on the `property` field. Must be `in`.
| property | string | Property field name. Must be `domain`.
| values | array of strings | Property values. Can be `External` or `external` when property is `domain`.

For example: 

    ...
    "rules": [
        {
          "operator": "in",
          "property": "domain",
          "values": [
            "External",
            "external"
          ]
        }
      ]...

### Rule ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field name. Must be `threat_severity`.
| operator | string | Operator to run on the `property` field. Must be `in`.
| values | array of strings | Property values. Can be one or more of the following when used with `threat_severity` and `in`: <ul><li>`Critical` - critical severity</li><li>`High` - high severity</li></ul><ul><li>`Medium` - medium severity</li></ul>

For example:

    ...
    "rules": [
        {
          "operator": "in",
          "property": "severity",
          "values": [
            "Critical",
            "High",
            "Medium"
          ]
        }
    }...

### Rule1 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field name. Must be `threat_severity`.
| operator | string | Operator to run on the `property` field. Must be `equals`.
| values | array of strings | Property value. Must be `critical`.

For example:

    ...
    "rules": [
      {
        "operator": "equals",
        "property": "threat_severity",
        "values": [
          "critical"
        ]
      }...

### Rule2 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field name. Must be `severity`.
| operator | string | Operator to run on the `property` field. Must be `in`.
| values | array of strings | Property value. Can be one or more of the following when used with `severity` and `in`: <ul><li>`Critical` - critical severity</li><li>`High` - high severity</li><li>`Medium` - medium severity</li></ul>

For example:

    ...
    "rules": [
      {
        "operator": "in",
        "property": "severity",
        "values": [
          "Critical",
          "High",
          "Medium"
        ]
      }...

### RuleName ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| rule | string | Rule name. Must be `app_risky`.

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### RuleName1 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| rule | string | Rule name. Must be `app_risky`.

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### RuleName2 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| rule | string | Rule name. Must be `app_risky`.

For example:

    ...
    "rules": [
      {
        "rule": "app_risky"
      }...

### RuleName3 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| rule | string | Rule name. Can be one of the following: <ul><li>`blocked` - blocked threats</li><li>`unblocked` - unblocked threats</li></ul>

For example:

    ...
    "rules": [
      {
        "rule": "blocked"
      }...

### RuleName4 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| rule | string | Rule name. Can be one or more the following: <ul><li>`url_high_risk` - risky URL</li><li>`blocked` - blocked URL</li></ul> 

For example:

    ...
    "rules": [
      {
        "rule": "url_high_risk"
      },
      {
        "rule": "blocked"
      }...


### TimeFilter ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| operator | string | Operator to run on the `property` field. Can be one of the following: <ul><li>`equals` - single value comparison</li><li>`in` - multiple value comparison</li><li>`gt` - greater than comparison</li><li>`lt` - less than comparison</li><li>`last_n_minutes` - minutes comparison</li><li>`last_n_hours` - hours comparison</li><li>`last_n_days` - days comparison</li></ul>
| property | string | Property field name. Must be `event_time`.
| values | array of strings | Property value. Can be any number that represents minute, hour, or day counts when `property` is `event_time`.

For example:

    ...
    "rules": [
      {
        "operator": "last_n_days",
        "property": "event_time",
        "values": [
          7
        ]
      }...

## Properties ##
Properties are a required array of objects. Properties are database field names that will be returned in the API response. You can use one or more properties to customize your request, but you can also use most of the examples in the [API reference](/sase/api/msp) as they are. 

Some of the properties are predefined, so you must use exactly what you see. Some properties contain choices, so you can decide. 

### Property ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_count` - total count of alerts</li><li>`mu_count` - count of mobile user alerts</li><li>`rn_count` - count of remote network alerts</li><li>`sc_count` - count of service connection alerts</li></ul>

For example:

      "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_count"
        },
        {
          "property": "mu_count"
        },
        {
          "property": "rn_count"
        },
        {
          "property": "sc_count"
        }
      ]

### Property1 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_app_count` - total count of risky applications</li><li>`total_app_remote_network` - total count of risky applications for remote networks</li><li>`total_app_mobile_users` - total count of risky apps for mobile users</li><li>`total_app_proxy_nodes` - total count of risky apps for proxy nodes</li></ul>

For example:

    "properties": [
      {
        "property": "sub_tenant_id"
      },
      {
        "property": "total_app_count"
      },
      {
        "property": "total_app_remote_network"
      },
      {
        "property": "total_app_mobile_users"
      },
      {
        "property": "total_app_proxy_nodes"
      }
    ]

### Property2 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`tenant_id`</li><li>`tenant_name`</li><li>`app`</li><li>`unique_app_count`</li><li>`app_count`</li></ul> 
| function | string |  Operations to run on the property field. Operations can be run only on number properties. Can be one or more of the following: <ul><li>`count` - number of values</li><li>`sum` - sum of the data values </li><li>`avg` - average of the data values</li></ul> 
| sort | object | Sort order for the property
| order | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>

For example:

    {
      "properties": [
        {
          "property": "tenant_id"
        },
        {
          "property": "tenant_name"
        },
        {
          "property": "app"
        },
        {
          "function": "avg",
          "property": "unique_app_count"
        },
        {
          "function": "sum",
          "property": "app_count",
          "sort": {
            "order": "desc"
          }
        }
      ]
    }


### Property3 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group</li><li>`total_app_count` - total app count</li><li>`total_app_remote_network` - total app count by remote network</li><li>`total_app_mobile_users` - total app count by mobile users</li><li>`total_app_proxy_nodes` - total app count by proxy nodes</li></ul> 

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_app_count"
        },
        {
          "property": "risk_of_app_count"
        }
      ]

### Property4 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_app_count` - total app count</li><li>`total_app_remote_network` - total app count by remote network</li><li>`total_app_mobile_users` - total app count by mobile users</li><li>`total_app_proxy_nodes` - total app count by proxy nodes</li></ul>  

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "total_app_count"
        },
        {
          "property": "total_app_remote_network"
        },
        {
          "property": "total_app_mobile_users"
        },
        {
          "property": "total_app_proxy_nodes"
        }
      ]

### Property5 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | :--|
| alias | string | Change a property field name to a different name of your choice.
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`tenant_id`</li><li>`tenant_name`</li><li>`threat_severity`</li><li>`threat_severity_count`</li><li>`url_count`</li><li>`threat_id`</li><li>`threat_count`</li></ul>
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: <ul><li>`distinct_count` - used with `threat_id` property</li><li>`avg` - used with `threat_count` property</li></ul>
| sort | object | Sort order for the property
| order | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>

For example:

    "properties": [
        {
          "property": "tenant_id"
        },
        {
          "property": "tenant_name"
        },
        {
          "property": "threat_severity"
        },
        {
          "property": "threat_severity_count"
        },
        {
          "property": "url_type"
        },
        {
          "property": "url_count"
        },
        {
          "alias": "unique_threat_count",
          "function": "distinct_count",
          "property": "threat_id"
        },
        {
          "function": "avg",
          "property": "threat_count"
        }
      ]

### Property6 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`total_threats`</li><li>`blocked_count`</li><li>`unblocked_count`</li></ul>

For example:

    "properties": [
        {
          "property": "total_threats"
        },
        {
          "property": "unblocked_count"
        }
      ]

### Property7 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| alias | string | Change a property field name to a different name of your choice.
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` tenant service group ID</li><li>`uri_count`</li></ul>
| function | string | Operations to run on the property field. Operations can be run only on number properties. Can be one of the following: `sum`
| sort | object | Sort order for the property
| order | string | Can be one of the following: <ul><li>`desc` - descending</li><li>`asc` - ascending</li></ul>

For example:

    "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "alias": "count",
          "function": "sum",
          "property": "uri_count",
          "sort": {
            "order": "desc"
          }
        }
      ]

### Property8 ###

Object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| property | string | Property field names that are returned in the API response. Can be one or more of the following: <ul><li>`sub_tenant_id` - tenant service group ID</li><li>`amiversion` - AWS AMI version</li><li>`current_software_version` - Prisma Access software version</li><li>`last_upgrade_date` - last upgrade date</li><li>`next_upgrade_scheduled_str` - date time of next scheduled upgrade</li><li>`status` - last upgrade status</li><li>`error` - upgrade error</li><li>`next_upgrade_scheduled` - date of next scheduled upgrade</li></ul> 

For example:

    {
      "properties": [
        {
          "property": "sub_tenant_id"
        },
        {
          "property": "amiversion"
        },
        {
          "property": "current_software_version"
        },
        {
          "property": "last_upgrade_date"
        },
        {
          "property": "next_upgrade_scheduled_str"
        },
        {
          "property": "status"
        },
        {
          "property": "error"
        },
        {
          "property": "next_upgrade_scheduled"
        }
      ]
    }
