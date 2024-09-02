function Human(){
    this.fname = "None";
    this.lname = "None";
    this.age= "undefined";
    this.gender = "undefined"
    this.printHuman = () => {
        console.log('---Human specifics---');
        console.log('First Name: '+ this.fname);
        console.log('Last Name: '+ this.lname);
        console.log('Age: '+ this.age);
        console.log('Gender: '+ this.gender);
    }
    this.fillHuman = (fname, lname,age,gender) => {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.gender=gender;
    }
}

module.exports = Human
