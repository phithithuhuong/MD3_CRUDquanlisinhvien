create database studentManagement;
use studentManagement;
create table class
(
    IDClass int primary key auto_increment,
    class   varchar(50)
);
create table students
(
    IDStudent   int primary key auto_increment,
    name        varchar(50),
    age         int,
    address     varchar(100),
    phoneNumber int unique,
    IDClass     int,
    foreign key (IDClass) references class (IDClass)


);
create table subject
(
    IDSubject int primary key auto_increment,
    subject   varchar(50)
);
create table point
(
    IDPoint int not null primary key auto_increment,
    hk1     int,
    hk2     int,
    hkEnd   int ,
    IDStudent int ,
    IDSubject int ,
    foreign key (IDStudent) references students(IDStudent),
    foreign key (IDSubject) references subject (IDSubject)


)