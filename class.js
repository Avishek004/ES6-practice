class Student {
    constructor(stuId, stuName) {
        this.id = stuId;
        this.name = stuName;
        this.school = "X";
    }
}

const student1 = new Student(1, "A");
const student2 = new Student(2, "B");
console.log(student1, student2);
console.log(student1.name, student2.name);