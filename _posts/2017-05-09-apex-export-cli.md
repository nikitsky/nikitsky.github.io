---
layout:     post
title:      Oracle APEX export command line options
published:  true
date:       2017-05-09
summary:    how to export an Oracle APEX application from command line
categories: oracle apex
---

![pic](/images/apex_export_import.jpg){:style="float: right; padding-left: 2rem;"} You can export application from APEX App builder using different methods like native Application Builder Export / Import functionality or APEXexport utility. 

### APEXexport utility
Take a look into utilities folder from apex installation archive and grab APEXExport.class and APEXExportSplitter.class files out of it. Oracle JDBC driver would be also required. Search for a file ojdbc7.jar or similar. Put them to a folder (APEXutils in my example) keeping in mind that APEXExport.class and APEXExportSplitter.class files must be placed into oracle\apex subfolder , e.g.:
<pre>
./APEXutils
./APEXutils/oracle
./APEXutils/oracle/apex
./APEXutils/oracle/apex/APEXExport.class
./APEXutils/oracle/apex/APEXExportSplitter.class
./APEXutils/oracle/ojdbc7.jar
</pre>

Now you can run export utility form that folder or better to add it to environment variable CLASSPATH:
```bash
export CLASSPATH=.:~/APEXutils/oracle/ojdbc7.jar:~/APEXutils
```

And now you can run the utility:
```bash
java oracle.apex.APEXExport \
         -db $database_ip:$port:$sid \
         -user $apex_developer \
         -password $secret \
         -applicationid $AppId \
         -expOriginalIds 
```

Where:  
* $database_ip — database server IP or hostname  
* $port — database port, 1521 by default  
* $sid — Your database SID  
* $apex_developer — oracle username  
* $secret — password  
* $AppId - your application ID 

This creates ```f{$AppId}.sql``` file in the current directory. 

Next step could be to split it by application components using the following command:
```bash
java oracle.apex.APEXExportSplitter f{$AppId}.sql
```
This creates a directory f{$AppId} with number of sql files - separate file for every component. It looks quite interesting to keep the application export in a source code repository.


