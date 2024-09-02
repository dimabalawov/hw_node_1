function Student(name,age,course)
{
    this.name = name;
    this.age = age;
    this.course = course;
    this.printStudent = () =>{
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Course: ' + this.course);
    }
    this.changeInfo = (name,age,course) =>{
        this.name=name;
        this.age=age;
        this.course=course;
    }
}


function Students()
{
    this.studentsArr = [];
    this.addStudent = (name,age,course) =>{
        var newStud = new Student(name,age,course);
        this.studentsArr.push(newStud);
    }
    this.popStudent = (index) =>{
        this.studentsArr.splice(index,1);
    }
    this.changeStudent = (index,name,age,course)  =>{
        this.studentsArr[index].changeInfo(name,age,course);
    }
    this.showAll = () => {
        this.studentsArr.forEach((student, index) => {
            console.log(`--- Student ${index} ---`);
            student.printStudent();
        });
    }
}

module.exports = Students