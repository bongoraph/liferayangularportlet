import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import {MenuList} from '../menulist.model';
import {ModelAttributes} from '../modelAttributes.model';
import {ModelValues} from '../modelvalues.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    //menu: MenuList[];
    menu: any;
    attributes: ModelAttributes[];
    values: ModelValues[];

  constructor() { 
    this.menu = [
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34513",
                "userName": "Test User",
                "uuid": "d9c97837-b3aa-a38c-34c1-7db19cea30cf",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34512",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1555480504733,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690343150
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "AusFleet",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ausfleet.png\",\"type\":\"document\",\"uuid\":\"ef8dad01-68c7-1cd8-6337-bb037d01f80e\"}",
                "URL": "http://af8.afhostapp.net/SSC_LIVE/SecurityLogOn/LogOn"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34532",
                "userName": "Test User",
                "uuid": "57f42215-b9bf-4189-b766-5e879dd16e90",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34531",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690370790,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690370790
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Citrix NetScaler",
                "Image": "{\"groupId\":\"20126\",\"title\":\"netscaler.png\",\"type\":\"document\",\"uuid\":\"38184300-a59b-6097-b7d0-4c4937551800\"}",
                "URL": "https://remote.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34547",
                "userName": "Test User",
                "uuid": "8e2a467d-e0fe-6ea0-dae1-0c35be504b47",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34546",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690387037,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690387020
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Compass",
                "Image": "{\"groupId\":\"20126\",\"title\":\"compass (1).jpg\",\"type\":\"document\",\"uuid\":\"d79f37a2-50ae-d625-dec9-5ed83bfc057c\"}",
                "URL": "http://compass.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34564",
                "userName": "Test User",
                "uuid": "90c3b7ea-898d-01a7-39ed-740ecbbb3590",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34563",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690437130,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690437130
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Compass CMS Admin",
                "Image": "{\"groupId\":\"20126\",\"title\":\"seamlessv3.jpg\",\"type\":\"document\",\"uuid\":\"dd2ef8e8-8aae-6c2a-7afa-55fe96082857\"}",
                "URL": "https://compassadmin.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34581",
                "userName": "Test User",
                "uuid": "bb872106-d5e3-a8b4-cf86-7ccac0e2b55d",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34580",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690455427,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690455410
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Fiel Transfer",
                "Image": "{\"groupId\":\"20126\",\"title\":\"filetransfer.png\",\"type\":\"document\",\"uuid\":\"7441739f-950c-d71c-bec5-e1afe745b23f\"}",
                "URL": "https://sft.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34598",
                "userName": "Test User",
                "uuid": "056eed7d-bf0d-8705-6b57-84a571554296",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34597",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690473350,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690473333
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "iFerret",
                "Image": "{\"groupId\":\"20126\",\"title\":\"iferret.png\",\"type\":\"document\",\"uuid\":\"6f288802-d652-c687-ee61-aa782aa7b7e5\"}",
                "URL": "http://iferret.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34615",
                "userName": "Test User",
                "uuid": "42cc175f-18ee-fda7-bdfe-a11b3e199681",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34614",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690490140,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690490140
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Outlook Web App",
                "Image": "{\"groupId\":\"20126\",\"title\":\"outlook.jpg\",\"type\":\"document\",\"uuid\":\"8c04625b-cf6a-dbca-991c-c2d3f06a5703\"}",
                "URL": "https://mail.ssc.nsw.gov.au/owa"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34632",
                "userName": "Test User",
                "uuid": "098e89f5-21c5-88fd-7ddb-28ba1bcbf556",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34631",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690509883,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690509883
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "SAP (Crystal Reports)",
                "Image": "{\"groupId\":\"20126\",\"title\":\"sap.png\",\"type\":\"document\",\"uuid\":\"8accb13b-cd45-11a5-6fab-ea955d0620e1\"}",
                "URL": "https://reportinterface.ssc.nsw.gov.au/BOE/BI"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34649",
                "userName": "Test User",
                "uuid": "6fd1e771-7dc4-b598-d953-c789558e0597",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34648",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690532397,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690532397
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Seamless CMS Admin",
                "Image": "{\"groupId\":\"20126\",\"title\":\"seamlessv4.jpg\",\"type\":\"document\",\"uuid\":\"68d1d6f4-06ee-e392-05c8-b8cecbf49ab0\"}",
                "URL": "http://cmsadmin.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34666",
                "userName": "Test User",
                "uuid": "42fe17ac-dda4-92c0-fe7d-42f46f436f3b",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34665",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690558353,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690558337
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "SSRS (Corporate Reports)",
                "Image": "{\"groupId\":\"20126\",\"title\":\"corporatereports.jpg\",\"type\":\"document\",\"uuid\":\"c80cfe61-d406-a314-24e0-29a754d4624e\"}",
                "URL": "https://corporatereportinterface.ssc.nsw.gov.au/Reports_SSRS/Pages/Folder.aspx?ViewMode=Detail"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34673",
                "userName": "Test User",
                "uuid": "55bf3c7c-323e-78f4-eb2c-654b87231541",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34672",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690574863,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690574863
            },
            "modelValues": {
                "Category": "[\"Corporate Management\"]",
                "Title": "Sutherland Shire Website",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ssc.png\",\"type\":\"document\",\"uuid\":\"4b931bc7-3110-b9de-6441-795eacab2602\"}",
                "URL": "http://www.sutherlandshire.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34688",
                "userName": "Test User",
                "uuid": "1c9904c9-e8d8-fe81-5035-647d82d17eeb",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34687",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690592823,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690592823
            },
            "modelValues": {
                "Category": "[\"Customer Request Management\"]",
                "Title": "CRMS",
                "Image": "{\"groupId\":\"20126\",\"title\":\"openoffice.png\",\"type\":\"document\",\"uuid\":\"4bfa062c-5157-ef0e-e41c-8110ea629c74\"}",
                "URL": "https://crms.ssc.nsw.gov.au/community_prod"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34705",
                "userName": "Test User",
                "uuid": "2ff61bf6-0b73-6de8-273f-6e5bc737675e",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34704",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690614033,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690614033
            },
            "modelValues": {
                "Category": "[\"Customer Request Management\"]",
                "Title": "Harmony",
                "Image": "{\"groupId\":\"20126\",\"title\":\"harmony.png\",\"type\":\"document\",\"uuid\":\"65f1fdd3-bbf6-17e1-2bd0-f98fb6b69e91\"}",
                "URL": "https://sp9.harmonykids.com.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34722",
                "userName": "Test User",
                "uuid": "9f9489ea-c653-c7f8-18ec-8b86ab495b65",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34721",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690635210,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690635193
            },
            "modelValues": {
                "Category": "[\"Customer Request Management\"]",
                "Title": "Service Desk Plus",
                "Image": "{\"groupId\":\"20126\",\"title\":\"servicedeskplus.png\",\"type\":\"document\",\"uuid\":\"b6c85c3f-6393-edb3-a15e-3f5b378acaad\"}",
                "URL": "https://sdp.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34739",
                "userName": "Test User",
                "uuid": "ac939253-32d7-2508-2e4c-984df3c5b322",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34738",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690656980,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690656967
            },
            "modelValues": {
                "Category": "[\"Employee Management\"]",
                "Title": "Aurion Self Service",
                "Image": "{\"groupId\":\"20126\",\"title\":\"aurion.png\",\"type\":\"document\",\"uuid\":\"448dbf20-916a-2640-85a0-4bd3309ce47d\"}",
                "URL": "https://employeeinterface.ssc.nsw.gov.au/Aurion"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34746",
                "userName": "Test User",
                "uuid": "10a755c5-00f5-695f-d1e6-fa4469353d16",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34745",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690670317,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690670300
            },
            "modelValues": {
                "Category": "[\"Employee Management\"]",
                "Title": "Delegations",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ssc.png\",\"type\":\"document\",\"uuid\":\"4b931bc7-3110-b9de-6441-795eacab2602\"}",
                "URL": "https://delegation.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34761",
                "userName": "Test User",
                "uuid": "e75e75b3-e63a-c81d-3bf4-e6b49fd07181",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34760",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690690857,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690690843
            },
            "modelValues": {
                "Category": "[\"Employee Management\"]",
                "Title": "Figtree Web WHS",
                "Image": "{\"groupId\":\"20126\",\"title\":\"figtree.jpg\",\"type\":\"document\",\"uuid\":\"fbef7073-9976-2193-c253-20416880dcdd\"}",
                "URL": "https://whsinterface.ssc.nsw.gov.au/228"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34778",
                "userName": "Test User",
                "uuid": "9e130b51-4dd6-28b6-aff2-81c1145c4b9a",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34777",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690709757,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690709757
            },
            "modelValues": {
                "Category": "[\"Employee Management\"]",
                "Title": "Timesheet",
                "Image": "{\"groupId\":\"20126\",\"title\":\"timesheet.png\",\"type\":\"document\",\"uuid\":\"a3f3a1ca-f8e4-ed8a-260f-958e13ae1b3a\"}",
                "URL": "https://timesheet.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34795",
                "userName": "Test User",
                "uuid": "bc54d405-4450-5f98-4d41-9a63264bed71",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34794",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690730040,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690730040
            },
            "modelValues": {
                "Category": "[\"Environment Management\"]",
                "Title": "Master Plan",
                "Image": "{\"groupId\":\"20126\",\"title\":\"masterplan.png\",\"type\":\"document\",\"uuid\":\"de8b6187-dd60-41a3-7fb0-35f776bcca44\"}",
                "URL": "https://devenquirer.ssc.nsw.gov.au/masterplan"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34802",
                "userName": "Test User",
                "uuid": "cb1995ce-09f8-ade9-6989-f99cdfaf05dc",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34801",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690747327,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690747327
            },
            "modelValues": {
                "Category": "[\"Environment Management\"]",
                "Title": "MPEditor",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ssc.png\",\"type\":\"document\",\"uuid\":\"4b931bc7-3110-b9de-6441-795eacab2602\"}",
                "URL": "https://mpeditor.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34807",
                "userName": "Test User",
                "uuid": "d14d4364-18dd-1bb1-d6ea-6cf34c679b28",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34806",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690765577,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690765577
            },
            "modelValues": {
                "Category": "[\"Environment Management\"]",
                "Title": "Native Plant Selector",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ssc.png\",\"type\":\"document\",\"uuid\":\"4b931bc7-3110-b9de-6441-795eacab2602\"}",
                "URL": "https://plantselector.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34812",
                "userName": "Test User",
                "uuid": "311ccb0d-c7f3-b8a2-8865-d1797344d8e8",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34811",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690778690,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690778673
            },
            "modelValues": {
                "Category": "[\"Environment Management\"]",
                "Title": "Tree Allocation",
                "Image": "{\"groupId\":\"20126\",\"title\":\"ssc.png\",\"type\":\"document\",\"uuid\":\"4b931bc7-3110-b9de-6441-795eacab2602\"}",
                "URL": "https://treeallocation.ssc.nsw.gov.au/"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34827",
                "userName": "Test User",
                "uuid": "b42bb35a-d347-9ef5-f29f-c0699fbca945",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34826",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690802353,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690802353
            },
            "modelValues": {
                "Category": "[\"Property Management\"]",
                "Title": "eProperty Prod",
                "Image": "{\"groupId\":\"20126\",\"title\":\"techone.png\",\"type\":\"document\",\"uuid\":\"1880071d-d980-195b-3e9d-9d8e7f410a62\"}",
                "URL": "https://propertydevelopment.ssc.nsw.gov.au/T1PRPROD/WebApps/eProperty/P1/GuestHome.aspx?r=SSC.P1.WEBGUEST&f=%24P1.EPR.GUESTHME.VIW"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34844",
                "userName": "Test User",
                "uuid": "4c5bc1cf-af52-08b7-3238-127d8d2a2d2a",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34843",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690823007,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690822990
            },
            "modelValues": {
                "Category": "[\"Spatial Management\"]",
                "Title": "Cleanup Areas On Call",
                "Image": "{\"groupId\":\"20126\",\"title\":\"geocortex.png\",\"type\":\"document\",\"uuid\":\"9f786cd6-7137-8bda-108e-c2d237ad7fa8\"}",
                "URL": "https://geocortex.ssc.nsw.gov.au/CleanupTrucks"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34851",
                "userName": "Test User",
                "uuid": "dd185424-fb5c-19ed-8b45-c1cd6297dc61",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34850",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690849800,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690849800
            },
            "modelValues": {
                "Category": "[\"Spatial Management\"]",
                "Title": "Local Environment Plan 2015",
                "Image": "{\"groupId\":\"20126\",\"title\":\"geocortex.png\",\"type\":\"document\",\"uuid\":\"9f786cd6-7137-8bda-108e-c2d237ad7fa8\"}",
                "URL": "https://maps.ssc.nsw.gov.au/LEP"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34856",
                "userName": "Test User",
                "uuid": "a4e8be4f-8baa-3edd-4dea-13bfba22c201",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34855",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690863537,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690863537
            },
            "modelValues": {
                "Category": "[\"Spatial Management\"]",
                "Title": "Shire Maps",
                "Image": "{\"groupId\":\"20126\",\"title\":\"geocortex.png\",\"type\":\"document\",\"uuid\":\"9f786cd6-7137-8bda-108e-c2d237ad7fa8\"}",
                "URL": "https://maps.ssc.nsw.gov.au/ShireMaps"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "34861",
                "userName": "Test User",
                "uuid": "7e49b164-3950-c079-39a1-92e7c0218b16",
                "userId": "20139",
                "version": "1.0",
                "recordId": "34860",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1554690876370,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1554690876370
            },
            "modelValues": {
                "Category": "[\"Spatial Management\"]",
                "Title": "SSC Maps",
                "Image": "{\"groupId\":\"20126\",\"title\":\"geocortex.png\",\"type\":\"document\",\"uuid\":\"9f786cd6-7137-8bda-108e-c2d237ad7fa8\"}",
                "URL": "https://geocortex.ssc.nsw.gov.au/SSCMaps"
            }
        },
        {
            "modelAttributes": {
                "versionUserName": "Test User",
                "finderCacheEnabled": true,
                "groupId": "20126",
                "entityCacheEnabled": true,
                "DDMStorageId": "35655",
                "userName": "Test User",
                "uuid": "30690668-1d8b-1349-548b-d342078612ef",
                "userId": "20139",
                "version": "1.0",
                "recordId": "35654",
                "companyId": "20099",
                "lastPublishDate": null,
                "recordSetVersion": "1.0",
                "modifiedDate": 1555562405720,
                "recordSetId": "34480",
                "versionUserId": "20139",
                "displayIndex": 0,
                "createDate": 1555562405720
            },
            "modelValues": {
                "Category": "[\"Employee Management\"]",
                "Title": "deletetest",
                "Image": "{\"groupId\":\"20126\",\"title\":\"compass (1).jpg\",\"type\":\"document\",\"uuid\":\"d79f37a2-50ae-d625-dec9-5ed83bfc057c\"}",
                "URL": "http://deletetest.com"
            }
        }
    ];
  }

  getUsers() {
    return this.menu;
  }


  getMenuItems(): Observable<MenuList[]> { 
    return of(this.menu);
  }
}

/*

return this.http.get(queryUrl,httpOptions).pipe(map(response => {
      console.log(response);
      return response[1].map((item: { category: any; title: any; image: any; url: any; }) => {
        return new BizAppDetail({
          category: item.category,
          title: item.title,
          image: item.image,
          url: item.url
        });
      });
    }));

    */