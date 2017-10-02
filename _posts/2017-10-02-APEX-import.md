---
layout:     post
title:      APEX application import 
published:  true
date:       2017-10-02
summary:    How to import an apex application using the command line interface 
categories: oracle apex 
---

Oracle Application Express provides two ways to import an application into an Application Express instance:

1. Upload and installation of an application export file by using the web interface of Application Express.
2. Execution of the application export file as a SQL script, typically in the command-line utility SQL*Plus.

Using the file upload capability of the web interface of Application Express, developers can import an application with a different application ID, different workspace ID and different parsing schema. But when importing an application by using a command-line tool like sqlcl, none of these attributes (application ID, workspace ID, parsing schema) can be changed without directly modifying the application export file.

So, if you would like import the application to the same workspace from it was exported e.g. restore a backup version, just execute the script (assuming that the application ID was 100):
```shell
sqlcl user/password@apex:1521:apexdb @f100.sql
```

Application Express 4.0 and higher includes the APEX_APPLICATION_INSTALL API. This PL/SQL API provides  methods to set application attributes during the Application Express application installation process. Thus if you want to install the application to another workspace or change the application ID, manual modification of the application export file should not be necessary.

The most common case is to migrate an application from a development to production environment. It requires to set proper workspace and application ID. 

And it can be done using the following simple code:
```sql
begin
    apex_application_install.set_workspace('WDT');
    apex_application_install.set_application_id(140);
    apex_application_install.generate_offset;
    apex_application_install.set_application_alias( 'MPM' );
end;
/

@f100.sql
```

It installs application 100 into workspace WDT with application ID 14 and alias 'MPM'.

Refer to [APEX_APPLICATION_INSTALL package documentation](http://docs.oracle.com/database/apex-5.1/AEAPI/APEX_APPLICATION_INSTALL.htm#AEAPI530) to see all attributes you can set for an application import.

---
Related posts:

[How to export APEX apps]({{ site.baseurl }}{% post_url 2017-05-09-apex-export-cli %})

