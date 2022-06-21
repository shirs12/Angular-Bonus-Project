import Person from "../Person";
import Event from "./Event";

export const EVENTS:Event[] = [
    new Event('International conference on medical and biosciences', 300,'Researchfora Venue Jerusalem',20, 
        new Person(37487353,'Geoffrey Stevens',30,true,'Beit Shemesh','https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg')),
    new Event('Comedy for Koby', 400,'Betzalel Street 11, Jerusalem',99, 
        new Person(84527485,'Beatrice Castro',20,false,'Jerusalem','https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png')),
    new Event('English speakers’ Beit Midrash', 500,'16 Shmuel Hanagid Street',400, 
        new Person(92748652,'Cliff Williamson',30,true,'Jerusalem','https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png')),
    new Event('Jerusalem Creatives 2.0', 600,'10 Sderot Yitshak Rabin',30000, 
        new Person(172546825,'Gregory Clarke',45,true,'Lod','https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg')),
    new Event('Cyber Workshop -Tomer Shadmy - AI and Social Disruption', 700,'Ohel Moshe 42, Nachlaot',1500, 
        new Person(274869253,'Clarissa Macy',40,false,'Jerusalem','https://img.favpng.com/5/1/21/computer-icons-user-profile-avatar-female-png-favpng-cqykKc0Hpkh65ueWt6Nh2KFvS.jpg')),
    new Event('Third Annual Jerusalem Community Woodstock Festival', 350,'Silo Café',75, 
        new Person(83675635,'Andrea Webb',30,false,'Ariel','https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png')),
    new Event('Bar Mitzvah', 450,'The egalitarian kotel - ezrat yisrael',55000, 
        new Person(63758473,'Elliot Robertson',45,true,'Jerusalem','https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg')),
    new Event('Semester ends', 550,'The Racah Institute of Physics',25, 
        new Person(94758256,'Hazel Peay',40,false,'Modiin','https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png')),

];