import Person from "../Person";
import Event from "./Event";

export const EVENTS:Event[] = [
    new Event('event1', 300,'address1',20, 
        new Person(11111111,'name1',30,true,'city1','img-url1')),
    new Event('event2', 400,'address2',99, 
        new Person(22222222,'name2',20,false,'city2','img-url2')),
    new Event('event3', 500,'address3',400, 
        new Person(33333333,'name3',30,true,'city3','img-url3')),
    new Event('event4', 600,'address4',30000, 
        new Person(44444444,'name4',45,true,'city4','img-url4')),
    new Event('event5', 700,'address5',1500, 
        new Person(55555555,'name5',40,false,'city5','img-url5')),
    new Event('event6', 350,'address3',75, 
        new Person(66666666,'name6',30,false,'city6','img-url6')),
    new Event('event7', 450,'address4',55000, 
        new Person(77777777,'name7',45,true,'city7','img-url7')),
    new Event('event8', 550,'address5',25, 
        new Person(88888888,'name8',40,false,'city8','img-url8')),

];