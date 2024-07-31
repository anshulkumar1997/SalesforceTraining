import { LightningElement } from 'lwc';

export default class LwcProjectLocation extends LightningElement {
    
    projloclist=[
        {"projno":"1001","projname":"vodafone","projloc":"pune"},
        {"projno":"1002","projname":"Adecco","projloc":"mumbai"},
        {"projno":"1003","projname":"karlsberg","projloc":"bangalore"},
        {"projno":"1004","projname":"singtel","projloc":"chennai"},
        {"projno":"1005","projname":"BMW","projloc":"hyderabad"}
    ];
    projfields=[
        {"label":"Project Number","fieldName":"projno","type":"integer"},
        {"label":"Project Name","fieldName":"projname","type":"text"},
        {"label":"Project Locations","fieldName":"projloc","type":"text"}
    ];
}