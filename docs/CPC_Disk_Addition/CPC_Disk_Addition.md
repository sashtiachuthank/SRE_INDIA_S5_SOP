This article helps you to create and add a new virtual disk to an existing Linux virtual machine on CPC. Here are the steps for adding a new virtual disk on a Linux virtual machine (X86).  


📌  ***No downtime is required for this activity***


**Step: 1**

Search for the respective host in the CPC portal based on the IMAP or project ID and click it to open further. 

![pic3](Picture1.png)

**Step: 2**

Once we got the host screen, check the list of existing disk volumes. Use the ***"Edit Volumes"*** option for adding new volume to the host.

![pic3](Picture2.png)

**Step: 3**

The ***"Edit Volumes"*** screen will be like this. In that click the ***"Add Disk +"*** option.

![pic3](Picture3.png)

**Step: 4**

Select the required disk space and use the ***"Add Volumes"*** option for volume addition.

![pic3](Picture4.png)

**Step: 5**

Post that you will be prompted with the CPC request ID.

![pic3](Picture5.png)

**Step: 6**

In sometime, you will be receiving a task successfull completion mail. 

  > Once you recieved such mail please proceed with the below steps.
  
  > If you didn't receive such mail then please reach to the #cirrus-platform-support slack channel.


![pic3](Picture6.png)

**Step: 7**

![pic3](Picture7.png)


###Below commands can be used for multipath LV expansion

```bash

# pvcreate /dev/mapper/mpathb
# vgextend datavg /dev/mapper/mpathb
# vgs
# df -hTP /tempdb2
# lvextend -L +2G /dev/mapper/datavg-tempdb2lv -r
# df -hTP /tempdb2

```

---

###Below commands can be used for LV expansion

```bash
[root@g53xr00006301 ~]# vgs
VG       #PV #LV #SN Attr   VSize    VFree
  datavg     2   9   0 wz--n-  199.99g  90.84g
  systemvg   1   7   0 wz--n- <118.00g <78.73g
[root@g53xr00006301 ~]# lvextend -L +20G /dev/mapper/datavg-datalv -r
```
**Before expansion:**
```bash
[root@g53xr00006301 ~]# df -hTP /data/disk1
Filesystem                Type  Size  Used Avail Use% Mounted on
/dev/mapper/datavg-datalv xfs    30G   28G  1.6G  95% /data/disk1
[root@g53xr00006301 ~]# 
```
**After expansion:**
```bash
[root@g53xr00006301 ~]# df -hTP /data/disk1
Filesystem                Type  Size  Used Avail Use% Mounted on
/dev/mapper/datavg-datalv xfs    50G   29G   22G  57% /data/disk1
[root@g53xr00006301 ~]#
```