var exec = require('child_process').exec;
var async = require('async');

var account = "rolling_scopes";
var password = "";

var students = ["Andrei_Bahushevich",
    "Artsiom_Rybakou",
    "Alex_Glinsky",
    "Aliaksandr_Mikhin",
    "Aliaksei_Farbotka",
    "Aliaksei_Tsiatsiokin",
    "andrei_hameza",
    "Andrey_Voroshkov",
    "Anton_Kapylets",
    "Darya_Urekina",
    "dzmitry_kouhanau",
    "Edvards_Kazlouski",
    "Hanna_Zaleskaya",
    "Heorhi_Sidorin",
    "Maksim_Talochka",
    "Nataliya_Seradzenka",
    "Pavel_Bulychev",
    "Pavel_Kuzniatsou",
    "pavel_puchko",
    "Pavel_Zaletski",
    "Siarhei_Patronchyk",
    "Siarhey_Sazontau",
    "Stanislav_Belous",
    "uladzislau_makarevich",
    "Uladzislau_Sakalou",
    "Vadzim_Masenzou",
    "Valiantsin_Rafalski",
    "vladimir_artemenko",
    "Vladimir_Panteleev",
    "Volha_Kharevich",
    "yuliya_filipava",
    "Yuliya_Kharytaniuk",
    "Yury_Kharytanovich",
    "Darya_Ivanovich"];

async.map(students, gitClone, function (e, r) {
    //console.log(r);
});

function gitClone(student, callback){
    var gitCommand = 'git clone https://' + account + ':' + password + '@bitbucket.org/' + student + '/front-end-course.git ' + student;

    exec(gitCommand, function (error, stdout, stderr) {
        console.log("stdout" + JSON.stringify(stdout));
        console.log("error" + JSON.stringify(error));
        console.log("stderr" + JSON.stringify(stderr));
        callback();
    });
}